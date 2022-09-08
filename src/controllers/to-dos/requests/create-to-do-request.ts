import { Request } from "express";

interface CreateToDoRequest<T> extends Request {
  body: T;
}

export default CreateToDoRequest;
