import IToDosRepository from "@use_cases/repositories/ito-dos-repository";
import IUnfinishToDoUseCase from "./contracts/iunfinish-to-do-use-case";
import UnfinishToDoInput from "./ports/inputs/unfinish-to-do-input";

class UnfinishToDoUseCase implements IUnfinishToDoUseCase {
  private toDosRepository: IToDosRepository;

  constructor(toDosRepository: IToDosRepository) {
    this.toDosRepository = toDosRepository;
  }

  public execute(unfinishToDoInput: UnfinishToDoInput): boolean {
    return this.toDosRepository.unfinishToDo(unfinishToDoInput.id);
  }
}

export default UnfinishToDoUseCase;
