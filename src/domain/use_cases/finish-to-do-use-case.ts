import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import IFinishToDoUseCase from "./contracts/ifinish-to-do-use-case";
import FinishToDoInput from "./ports/inputs/finish-to-do-input";

class FinishToDoUseCase implements IFinishToDoUseCase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(finishToDoInput: FinishToDoInput): boolean {
    return this.toDoListRepository.finishToDo(finishToDoInput.id);
  }
}

export default FinishToDoUseCase;
