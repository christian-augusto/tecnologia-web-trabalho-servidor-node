import DeleteToDoInput from "../ports/inputs/delete-to-do-list-input";

interface IDeleteToDoUseCase {
  execute(deleteToDoInput: DeleteToDoInput): void;
}

export default IDeleteToDoUseCase;
