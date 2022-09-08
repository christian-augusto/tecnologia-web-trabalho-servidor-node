interface FinishToDoRequest<T> extends Express.Request {
  params: T;
}

export default FinishToDoRequest;
