import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import IDeleteToDoUseCase from "./contracts/idelete-to-do-list-use-case";
import DeleteToDoInput from "./ports/inputs/delete-to-do-list-input";

class DeleteToDoUseCase implements IDeleteToDoUseCase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(deleteToDoInput: DeleteToDoInput): void {
    this.toDoListRepository.deleteToDoById(deleteToDoInput.id);
  }
}

export default DeleteToDoUseCase;
