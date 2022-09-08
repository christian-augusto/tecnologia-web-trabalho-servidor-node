import { Router, Request, Response } from "express";

import ICreateToDoListUsecase from "@usecases/contracts/icreate-to-do-list-usecase";
import IListToDoListsUsecase from "@usecases/contracts/ilist-to-do-lists-usecase";
import IDeleteToDoListUsecase from "@usecases/contracts/idelete-to-do-list-usecase";
import DeleteToDoRequest from "./requests/delete-to-do-list-request";
import DeleteToDoListInput from "@usecases/ports/input/delete-to-do-list-input";

export default function (
  createToDoListUsecase: ICreateToDoListUsecase,
  listToDoListsUsecase: IListToDoListsUsecase,
  deleteToDoListUsecase: IDeleteToDoListUsecase,
): Router {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    const responseBody = listToDoListsUsecase.execute();

    res.status(200).json(responseBody);
  });

  router.post("/", (req: Request, res: Response) => {
    const responseBody = createToDoListUsecase.execute();

    res.status(201).json(responseBody);
  });

  router.delete("/:id", (req: DeleteToDoRequest<DeleteToDoListInput>, res: Response) => {
    deleteToDoListUsecase.execute(req.params);

    res.status(204).end();
  });

  return router;
}