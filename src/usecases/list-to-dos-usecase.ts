import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import IListToDosUsecase from "./contracts/ilist-to-dos-usecase";
import ListToDosInput from "./ports/input/list-to-dos-input";
import ListToDosOutput from "./ports/output/list-to-dos-output";

class ListToDosUsecase implements IListToDosUsecase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(listToDosInput: ListToDosInput): ListToDosOutput {
    const toDos = this.toDoListRepository.getToDos(listToDosInput.to_do_list_id);

    return {
      to_dos: toDos,
    };
  }
}

export default ListToDosUsecase;
