import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import IDeleteToDoListUseCase from "./contracts/idelete-to-do-list-use-case";
import DeleteToDoListInput from "./ports/inputs/delete-to-do-list-input";

class DeleteToDoListUseCase implements IDeleteToDoListUseCase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(deleteToDoListInput: DeleteToDoListInput): void {
    this.toDoListRepository.deleteToDoListById(deleteToDoListInput.id);
  }
}

export default DeleteToDoListUseCase;
