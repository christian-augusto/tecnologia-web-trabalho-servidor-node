import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import IDeleteToDoUsecase from "./contracts/idelete-to-do-list-usecase";
import DeleteToDoInput from "./ports/input/delete-to-do-list-input";

class DeleteToDoUsecase implements IDeleteToDoUsecase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(deleteToDoInput: DeleteToDoInput): void {
    this.toDoListRepository.deleteToDoById(deleteToDoInput.id);
  }
}

export default DeleteToDoUsecase;
