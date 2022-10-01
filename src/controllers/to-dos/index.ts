import express, { Router, Response } from "express";

import ICreateToDoUseCase from "@use_cases/contracts/icreate-to-do-use-case";
import CreateToDoInput from "@use_cases/ports/inputs/create-to-do-input";
import CreateToDoRequest from "./requests/create-to-do-request";
import IListToDosUseCase from "@use_cases/contracts/ilist-to-dos-use-case";
import ListToDosInput from "@use_cases/ports/inputs/list-to-dos-input";
import ListToDosRequest from "./requests/list-to-dos-request";
import IDeleteToDoUseCase from "@use_cases/contracts/idelete-to-do-use-case";
import DeleteToDoInput from "@use_cases/ports/inputs/delete-to-do-input";
import DeleteToDoRequest from "./requests/delete-to-do-request";
import IFinishToDoUseCase from "@use_cases/contracts/ifinish-to-do-use-case";
import FinishToDoInput from "@use_cases/ports/inputs/finish-to-do-input";
import FinishToDoRequest from "./requests/finish-to-do-request";
import IUnfinishToDoUseCase from "@use_cases/contracts/iunfinish-to-do-use-case";
import UnfinishToDoInput from "@use_cases/ports/inputs/unfinish-to-do-input";
import UnfinishToDoRequest from "./requests/unfinish-to-do-request";
import IUpdateToDoUseCase from "@use_cases/contracts/iupdate-to-do-use-case";
import UpdateToDoInput from "@use_cases/ports/inputs/update-to-do-input";
import UpdateToDoRequest, { UpdateToDoParams, UpdateToDoBody } from "./requests/update-to-do-request";

const createRouter = (
  CreateToDoUseCase: ICreateToDoUseCase,
  listToDosUseCase: IListToDosUseCase,
  deleteToDoUseCase: IDeleteToDoUseCase,
  finishToDoUseCase: IFinishToDoUseCase,
  unfinishToDoUseCase: IUnfinishToDoUseCase,
  updateToDoUseCase: IUpdateToDoUseCase,
): Router => {
  const router = Router();

  router.get("/", (req: ListToDosRequest<ListToDosInput>, res: Response) => {
    const responseBody = listToDosUseCase.execute(req.query);

    res.status(200).json(responseBody);
  });

  router.post("/", express.json(), (req: CreateToDoRequest<CreateToDoInput>, res: Response) => {
    const responseBody = CreateToDoUseCase.execute(req.body);

    res.status(201).json(responseBody);
  });

  router.delete("/:id", (req: DeleteToDoRequest<DeleteToDoInput>, res: Response) => {
    deleteToDoUseCase.execute(req.params);

    res.status(204).end();
  });

  router.put("/:id", express.json(), (req: UpdateToDoRequest<UpdateToDoParams, UpdateToDoBody>, res: Response) => {
    const updateToDoInput: UpdateToDoInput = {
      id: req.params.id,
      text: req.body.text,
    };

    const updated = updateToDoUseCase.execute(updateToDoInput);

    if (updated) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });

  router.put("/:id/finish", (req: FinishToDoRequest<FinishToDoInput>, res: Response) => {
    const updated = finishToDoUseCase.execute(req.params);

    if (updated) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });

  router.put("/:id/unfinish", (req: UnfinishToDoRequest<UnfinishToDoInput>, res: Response) => {
    const updated = unfinishToDoUseCase.execute(req.params);

    if (updated) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });

  return router;
};

export default createRouter;
