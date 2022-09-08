import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import IUnfinishToDoUsecase from "./contracts/iunfinish-to-do-usecase";
import UnfinishToDoInput from "./ports/input/unfinish-to-do-input";

class UnfinishToDoUsecase implements IUnfinishToDoUsecase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(unfinishToDoInput: UnfinishToDoInput): boolean {
    return this.toDoListRepository.unfinishToDo(unfinishToDoInput.id);
  }
}

export default UnfinishToDoUsecase;
