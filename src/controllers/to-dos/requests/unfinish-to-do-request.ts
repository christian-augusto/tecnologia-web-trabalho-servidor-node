interface UnfinishToDoRequest<T> extends Express.Request {
  params: T;
}

export default UnfinishToDoRequest;
