interface ListToDosRequest<T> extends Express.Request {
  query: T;
}

export default ListToDosRequest;
