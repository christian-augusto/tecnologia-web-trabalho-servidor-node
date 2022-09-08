import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import IFinishToDoUsecase from "./contracts/ifinish-to-do-usecase";
import FinishToDoInput from "./ports/input/finish-to-do-input";

class FinishToDoUsecase implements IFinishToDoUsecase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(finishToDoInput: FinishToDoInput): boolean {
    return this.toDoListRepository.finishToDo(finishToDoInput.id);
  }
}

export default FinishToDoUsecase;
