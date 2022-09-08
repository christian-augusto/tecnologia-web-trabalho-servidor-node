import express, { Router, Request, Response } from "express";

import IListToDosUsecase from "@usecases/contracts/ilist-to-dos-usecase";
import ICreateToDoUsecase from "@usecases/contracts/icreate-to-do-usecase";
import CreateToDoInput from "@usecases/ports/input/create-to-do-input";
import CreateToDoRequest from "./requests/create-to-do-request";

export default function (listToDosUsecase: IListToDosUsecase, createToDoUsecase: ICreateToDoUsecase): Router {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    const responseBody = listToDosUsecase.execute();

    res.status(200).json(responseBody);
  });

  router.post("/", express.json(), (req: CreateToDoRequest<CreateToDoInput>, res: Response) => {
    const responseBody = createToDoUsecase.execute(req.body);

    res.status(201).json(responseBody);
  });

  // router.delete("/:id", (req: Request, res: Response) => {
  //   const deleteToDoListInput = {
  //     id: Number(req.params.id),
  //   };

  //   deleteToDoListUsecase.execute(deleteToDoListInput);

  //   res.status(204).end();
  // });

  return router;
}
