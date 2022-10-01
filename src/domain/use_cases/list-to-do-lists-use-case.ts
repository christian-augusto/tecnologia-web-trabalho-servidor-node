import IToDoListsRepository from "@use_cases/repositories/ito-do-lists-repository";
import IListToDoListsUseCase from "./contracts/ilist-to-do-lists-use-case";
import ListToDoListsOutput from "./ports/outputs/list-to-do-lists-output";

class ListToDoListsUseCase implements IListToDoListsUseCase {
  private toDoListsRepository: IToDoListsRepository;

  constructor(toDoListsRepository: IToDoListsRepository) {
    this.toDoListsRepository = toDoListsRepository;
  }

  public execute(): ListToDoListsOutput {
    const toDoLists = this.toDoListsRepository.getToDoLists();

    return {
      to_do_lists: toDoLists,
    };
  }
}

export default ListToDoListsUseCase;
