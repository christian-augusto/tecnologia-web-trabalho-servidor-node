import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import IListToDosUseCase from "./contracts/ilist-to-dos-use-case";
import ListToDosInput from "./ports/inputs/list-to-dos-input";
import ListToDosOutput from "./ports/outputs/list-to-dos-output";

class ListToDosUseCase implements IListToDosUseCase {
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

export default ListToDosUseCase;
