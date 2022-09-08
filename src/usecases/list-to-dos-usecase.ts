import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import IListToDosUsecase from "./contracts/ilist-to-dos-usecase";
import ListToDosOutput from "./ports/output/list-to-dos-output";

class ListToDosUsecase implements IListToDosUsecase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public Execute(): ListToDosOutput {
    const toDos = this.toDoListRepository.getToDos();

    return {
      to_dos: toDos,
    };
  }
}

export default ListToDosUsecase;
