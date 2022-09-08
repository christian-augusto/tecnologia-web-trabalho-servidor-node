import DeleteToDoInput from "../ports/input/delete-to-do-list-input";

interface IDeleteToDoUsecase {
  execute(deleteToDoInput: DeleteToDoInput): void;
}

export default IDeleteToDoUsecase;
