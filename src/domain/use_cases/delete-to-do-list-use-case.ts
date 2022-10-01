import IToDoListsRepository from "@use_cases/repositories/ito-do-lists-repository";
import IDeleteToDoListUseCase from "./contracts/idelete-to-do-list-use-case";
import DeleteToDoListInput from "./ports/inputs/delete-to-do-list-input";

class DeleteToDoListUseCase implements IDeleteToDoListUseCase {
  private toDoListsRepository: IToDoListsRepository;

  constructor(toDoListsRepository: IToDoListsRepository) {
    this.toDoListsRepository = toDoListsRepository;
  }

  public execute(deleteToDoListInput: DeleteToDoListInput): void {
    this.toDoListsRepository.deleteToDoListById(deleteToDoListInput.id);
  }
}

export default DeleteToDoListUseCase;
