import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import IDeleteToDoListUsecase from "./contracts/idelete-to-do-list-usecase";
import DeleteToDoListInput from "./ports/input/delete-to-do-list-input";

class DeleteToDoListUsecase implements IDeleteToDoListUsecase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(deleteToDoListInput: DeleteToDoListInput): void {
    this.toDoListRepository.deleteToDoListById(deleteToDoListInput.id);
  }
}

export default DeleteToDoListUsecase;
