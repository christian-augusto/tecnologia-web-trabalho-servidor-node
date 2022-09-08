import express, { Router, Request, Response } from "express";

import ICreateToDoUsecase from "@usecases/contracts/icreate-to-do-usecase";
import CreateToDoInput from "@usecases/ports/input/create-to-do-input";
import CreateToDoRequest from "./requests/create-to-do-request";
import IListToDosUsecase from "@usecases/contracts/ilist-to-dos-usecase";
import IDeleteToDoUsecase from "@usecases/contracts/idelete-to-do-usecase";
import DeleteToDoInput from "@usecases/ports/input/delete-to-do-input";
import DeleteToDoRequest from "./requests/delete-to-do-request";
import IFinishToDoUsecase from "@usecases/contracts/ifinish-to-do-usecase";
import FinishToDoInput from "@usecases/ports/input/finish-to-do-input";
import FinishToDoRequest from "./requests/finish-to-do-request";
import IUnfinishToDoUsecase from "@usecases/contracts/iunfinish-to-do-usecase";
import UnfinishToDoInput from "@usecases/ports/input/unfinish-to-do-input";
import UnfinishToDoRequest from "./requests/unfinish-to-do-request";

export default function (
  createToDoUsecase: ICreateToDoUsecase,
  listToDosUsecase: IListToDosUsecase,
  deleteToDoUsecase: IDeleteToDoUsecase,
  finishToDoUsecase: IFinishToDoUsecase,
  unfinishToDoUsecase: IUnfinishToDoUsecase,
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

  router.put("/:id/finish", (req: FinishToDoRequest<FinishToDoInput>, res: Response) => {
    const updated = finishToDoUsecase.execute(req.params);

    if (updated) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });

  router.put("/:id/unfinish", (req: UnfinishToDoRequest<UnfinishToDoInput>, res: Response) => {
    const updated = unfinishToDoUsecase.execute(req.params);

    if (updated) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });

  return router;
}
