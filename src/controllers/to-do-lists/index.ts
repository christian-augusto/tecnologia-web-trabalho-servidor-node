import { Router, Request, Response } from "express";

import ICreateToDoListUseCase from "@use_cases/contracts/icreate-to-do-list-use-case";
import IListToDoListsUseCase from "@use_cases/contracts/ilist-to-do-lists-use-case";
import IDeleteToDoListUseCase from "@use_cases/contracts/idelete-to-do-list-use-case";
import DeleteToDoRequest from "./requests/delete-to-do-list-request";
import DeleteToDoListInput from "@use_cases/ports/inputs/delete-to-do-list-input";

const createRouter = (
  createToDoListUseCase: ICreateToDoListUseCase,
  listToDoListsUseCase: IListToDoListsUseCase,
  deleteToDoListUseCase: IDeleteToDoListUseCase,
): Router => {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    const responseBody = listToDoListsUseCase.execute();

    res.status(200).json(responseBody);
  });

  router.post("/", (req: Request, res: Response) => {
    const responseBody = createToDoListUseCase.execute();

    res.status(201).json(responseBody);
  });

  router.delete("/:id", (req: DeleteToDoRequest<DeleteToDoListInput>, res: Response) => {
    deleteToDoListUseCase.execute(req.params);

    res.status(204).end();
  });

  return router;
};

export default createRouter;
