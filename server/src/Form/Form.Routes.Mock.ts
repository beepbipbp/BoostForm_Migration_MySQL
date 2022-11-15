import express from "express";
import sendFormListMockData from "./Form.Controller.Mock";

const formRouter = express.Router();

formRouter.get("/:page", sendFormListMockData);

export default formRouter;
