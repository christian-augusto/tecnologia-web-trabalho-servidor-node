import { Router, Request, Response } from "express";
import path from "path";

const createRouter = (): Router => {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    res.status(200).sendFile(path.resolve("src/public/pages/index.html"));
  });

  return router;
};

export default createRouter;
