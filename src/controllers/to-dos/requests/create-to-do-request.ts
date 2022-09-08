interface CreateToDoRequest<T> extends Express.Request {
  body: T;
}

export default CreateToDoRequest;
