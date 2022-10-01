import { Router, Request, Response } from "express";

const createRouter = (): Router => {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Server online",
    });
  });

  return router;
};

export default createRouter;
