import IToDosRepository from "@use_cases/repositories/ito-dos-repository";
import IUpdateToDoUseCase from "./contracts/iupdate-to-do-use-case";
import UpdateToDoInput from "./ports/inputs/update-to-do-input";

class UpdateToDoUseCase implements IUpdateToDoUseCase {
  private toDosRepository: IToDosRepository;

  constructor(toDosRepository: IToDosRepository) {
    this.toDosRepository = toDosRepository;
  }

  public execute(updateToDoInput: UpdateToDoInput): boolean {
    return this.toDosRepository.updateToDo(updateToDoInput.id, updateToDoInput.text);
  }
}

export default UpdateToDoUseCase;
