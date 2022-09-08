import DeleteToDoListInput from "../ports/input/delete-to-do-list-input";

interface IDeleteToDoListUsecase {
  execute(deleteToDoListInput: DeleteToDoListInput): void;
}

export default IDeleteToDoListUsecase;
