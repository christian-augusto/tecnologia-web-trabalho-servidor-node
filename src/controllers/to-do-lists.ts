import { Router, Request, Response } from "express";

import ICreateToDoListUsecase from "@usecases/contracts/icreate-to-do-list-usecase";
import IListToDoListsUsecase from "@usecases/contracts/ilist-to-do-lists-usecase";

export default function (
  createToDoListUsecase: ICreateToDoListUsecase,
  listToDoListsUsecase: IListToDoListsUsecase,
): Router {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    const responseBody = listToDoListsUsecase.Execute();

    res.status(200).json(responseBody);
  });

  router.post("/", (req: Request, res: Response) => {
    const responseBody = createToDoListUsecase.Execute();

    res.status(201).json(responseBody);
  });

  return router;
}
