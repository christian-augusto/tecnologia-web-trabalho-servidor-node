import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import ICreateToDoListUsecase from "./contracts/icreate-to-do-list-usecase";
import CreateToDoListOutput from "./ports/output/create-to-do-list-output";

class CreateToDoListUsecase implements ICreateToDoListUsecase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(): CreateToDoListOutput {
    const toDoList = this.toDoListRepository.createToDoList();

    return {
      toDoList: toDoList,
    };
  }
}

export default CreateToDoListUsecase;
