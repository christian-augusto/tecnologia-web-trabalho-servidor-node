import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import IListToDoListsUsecase from "./contracts/ilist-to-do-lists-usecase";
import ListToDoListsOutput from "./ports/output/list-to-do-lists-output";

class ListToDoListsUsecase implements IListToDoListsUsecase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public Execute(): ListToDoListsOutput {
    const toDoLists = this.toDoListRepository.getToDoLists();

    return {
      to_do_lists: toDoLists,
    };
  }
}

export default ListToDoListsUsecase;
