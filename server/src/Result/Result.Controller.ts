import { Request, Response, NextFunction } from "express";
import BadRequestException from "../Common/Exceptions/BadRequest.Exception";
import resultService from "./Result.Service";

class ResultController {
  // eslint-disable-next-line class-methods-use-this
  async formResult(req: Request, res: Response, next: NextFunction) {
    const { formID } = req.params;
    if (!formID || typeof formID !== "string") {
      next(new BadRequestException());
      return;
    }
    // TODO: 정수형 변환 validation
    try {
      await resultService.init(formID);
      const result = resultService.formResult();
      console.log(JSON.stringify(result));
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new ResultController();
