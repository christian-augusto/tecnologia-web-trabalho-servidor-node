import IToDosRepository from "@use_cases/repositories/ito-dos-repository";
import IFinishToDoUseCase from "./contracts/ifinish-to-do-use-case";
import FinishToDoInput from "./ports/inputs/finish-to-do-input";

class FinishToDoUseCase implements IFinishToDoUseCase {
  private toDosRepository: IToDosRepository;

  constructor(toDosRepository: IToDosRepository) {
    this.toDosRepository = toDosRepository;
  }

  public execute(finishToDoInput: FinishToDoInput): boolean {
    return this.toDosRepository.finishToDo(finishToDoInput.id);
  }
}

export default FinishToDoUseCase;
