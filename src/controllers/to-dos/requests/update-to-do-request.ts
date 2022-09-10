export interface UpdateToDoParams {
  id: number;
}

export interface UpdateToDoBody {
  text: string;
}

interface UpdateToDoRequest<TParams, TBody> extends Express.Request {
  params: TParams;
  body: TBody;
}

export default UpdateToDoRequest;
