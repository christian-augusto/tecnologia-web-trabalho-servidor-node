import DeleteToDoListInput from "../ports/inputs/delete-to-do-list-input";

interface IDeleteToDoListUseCase {
  execute(deleteToDoListInput: DeleteToDoListInput): void;
}

export default IDeleteToDoListUseCase;
