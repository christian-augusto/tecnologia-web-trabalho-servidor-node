import { Router, Request, Response } from "express";

import IListToDosUsecase from "@usecases/contracts/ilist-to-dos-usecase";

export default function (listToDosUsecase: IListToDosUsecase): Router {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    const responseBody = listToDosUsecase.execute();

    res.status(200).json(responseBody);
  });

  return router;
}
