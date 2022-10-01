import IToDosRepository from "@use_cases/repositories/ito-dos-repository";
import ICreateToDoUseCase from "./contracts/icreate-to-do-use-case";
import CreateToDoInput from "./ports/inputs/create-to-do-input";
import CreateToDoOutput from "./ports/outputs/create-to-do-output";

class CreateToDoUseCase implements ICreateToDoUseCase {
  private toDosRepository: IToDosRepository;

  constructor(toDosRepository: IToDosRepository) {
    this.toDosRepository = toDosRepository;
  }

  public execute(createToDoInput: CreateToDoInput): CreateToDoOutput {
    const toDo = this.toDosRepository.createToDo(createToDoInput.text, createToDoInput.to_do_list_id);

    return {
      toDo: toDo,
    };
  }
}

export default CreateToDoUseCase;
