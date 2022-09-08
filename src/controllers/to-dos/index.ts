import express, { Router, Request, Response } from "express";

import ICreateToDoUsecase from "@usecases/contracts/icreate-to-do-usecase";
import CreateToDoInput from "@usecases/ports/input/create-to-do-input";
import CreateToDoRequest from "./requests/create-to-do-request";
import IListToDosUsecase from "@usecases/contracts/ilist-to-dos-usecase";
import IDeleteToDoUsecase from "@usecases/contracts/idelete-to-do-usecase";
import DeleteToDoInput from "@usecases/ports/input/delete-to-do-input";
import DeleteToDoRequest from "./requests/delete-to-do-request";

export default function (
  createToDoUsecase: ICreateToDoUsecase,
  listToDosUsecase: IListToDosUsecase,
  deleteToDoUsecase: IDeleteToDoUsecase,
): Router {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    const responseBody = listToDosUsecase.execute();

    res.status(200).json(responseBody);
  });

  router.post("/", express.json(), (req: CreateToDoRequest<CreateToDoInput>, res: Response) => {
    const responseBody = createToDoUsecase.execute(req.body);

    res.status(201).json(responseBody);
  });

  router.delete("/:id", (req: DeleteToDoRequest<DeleteToDoInput>, res: Response) => {
    deleteToDoUsecase.execute(req.params);

    res.status(204).end();
  });

  return router;
}
