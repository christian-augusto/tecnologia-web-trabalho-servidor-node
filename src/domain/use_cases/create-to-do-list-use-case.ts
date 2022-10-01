import IToDoListsRepository from "@use_cases/repositories/ito-do-lists-repository";
import ICreateToDoListUseCase from "./contracts/icreate-to-do-list-use-case";
import CreateToDoListOutput from "./ports/outputs/create-to-do-list-output";

class CreateToDoListUseCase implements ICreateToDoListUseCase {
  private toDoListsRepository: IToDoListsRepository;

  constructor(toDoListsRepository: IToDoListsRepository) {
    this.toDoListsRepository = toDoListsRepository;
  }

  public execute(): CreateToDoListOutput {
    const toDoList = this.toDoListsRepository.createToDoList();

    return {
      toDoList: toDoList,
    };
  }
}

export default CreateToDoListUseCase;
