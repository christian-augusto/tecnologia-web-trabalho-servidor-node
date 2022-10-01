import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import IListToDoListsUseCase from "./contracts/ilist-to-do-lists-use-case";
import ListToDoListsOutput from "./ports/outputs/list-to-do-lists-output";

class ListToDoListsUseCase implements IListToDoListsUseCase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(): ListToDoListsOutput {
    const toDoLists = this.toDoListRepository.getToDoLists();

    return {
      to_do_lists: toDoLists,
    };
  }
}

export default ListToDoListsUseCase;
