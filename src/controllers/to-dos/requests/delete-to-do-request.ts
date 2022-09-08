interface DeleteToDoRequest<T> extends Express.Request {
  params: T;
}

export default DeleteToDoRequest;
