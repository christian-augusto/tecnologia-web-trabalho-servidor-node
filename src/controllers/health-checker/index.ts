import { Router, Request, Response } from "express";

export default function (): Router {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Server online",
    });
  });

  return router;
}
