/* eslint-disable class-methods-use-this */
import axios from "axios";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import tokens from "./types/tokens.inteface";
import UserModel from "./User.Model";
import InternalServerException from "../Common/Exceptions/InternalServer.Exception";
import UnauthorizedException from "../Common/Exceptions/unauthorized.Exception";

dotenv.config();
class UserService {
  redirectURL: string;

  constructor() {
    this.redirectURL = process.env.GITHUB_AUTHORIZE_URL || "";
  }

  async issueGithubAccessToken(code: string): Promise<string> {
    const opts = { headers: { accept: "application/json" } };
    const body = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
    };
    const githubAccessToken = await axios
      .post(`https://github.com/login/oauth/access_token`, body, opts)
      .then(async (res) => {
        return res.data.access_token;
      })
      .catch((err) => {
        throw UnauthorizedException;
      });
    return githubAccessToken;
  }

  async getGithubUserName(githubAccessToken: string): Promise<string> {
    const userName = await axios
      .get(`https://api.github.com/user`, {
        headers: { Authorization: `Bearer ${githubAccessToken}` },
      })
      .then(async (res) => {
        return res.data.login;
      })
      .catch((err) => {
        throw err;
      });
    return userName;
  }

  // 유저 로그인 및 최초 로그인시 회원 가입 처리
  // DB상의 유저id(primary_key)을 payload로 jwt생성하여 반환
  async login(code: string): Promise<tokens> {
    const githubAccessToken = await this.issueGithubAccessToken(code);
    const userName = await this.getGithubUserName(githubAccessToken);
    let user = await UserModel.findOneByName(userName);
    if (!user) {
      await this.signUp(userName);
      user = await UserModel.findOneByName(userName);
    }
    if (!user || typeof user.id !== "number") {
      throw new InternalServerException();
    }
    const accessToken = this.generateToken(user.id, "1m");
    const refreshToken = this.generateToken(user.id, "7d");
    user.refresh_token = refreshToken;
    user.save();
    return { accessToken, refreshToken };
  }

  async signUp(userName: string): Promise<void> {
    const newUser = new UserModel();
    newUser.name = userName;
    newUser.save();
  }

  generateToken(userID: number, expiresIn: string) {
    return jwt.sign({ id: userID }, process.env.JWTKEY || "", {
      expiresIn,
    });
  }
}

export default new UserService();
