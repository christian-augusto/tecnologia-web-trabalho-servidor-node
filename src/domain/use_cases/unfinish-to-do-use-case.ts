import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import IUnfinishToDoUseCase from "./contracts/iunfinish-to-do-use-case";
import UnfinishToDoInput from "./ports/inputs/unfinish-to-do-input";

class UnfinishToDoUseCase implements IUnfinishToDoUseCase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(unfinishToDoInput: UnfinishToDoInput): boolean {
    return this.toDoListRepository.unfinishToDo(unfinishToDoInput.id);
  }
}

export default UnfinishToDoUseCase;
