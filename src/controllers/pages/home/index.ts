import { Router, Request, Response } from "express";
import path from "path";

export default function (): Router {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    res.status(200).sendFile(path.resolve("src/public/pages/index.html"));
  });

  return router;
}
