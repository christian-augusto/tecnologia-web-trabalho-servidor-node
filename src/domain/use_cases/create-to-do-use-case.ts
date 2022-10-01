import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import ICreateToDoUseCase from "./contracts/icreate-to-do-use-case";
import CreateToDoInput from "./ports/inputs/create-to-do-input";
import CreateToDoOutput from "./ports/outputs/create-to-do-output";

class CreateToDoUseCase implements ICreateToDoUseCase {
  private toDoRepository: ITodoListRepository;

  constructor(toDoRepository: ITodoListRepository) {
    this.toDoRepository = toDoRepository;
  }

  public execute(createToDoInput: CreateToDoInput): CreateToDoOutput {
    const toDo = this.toDoRepository.createToDo(createToDoInput.text, createToDoInput.to_do_list_id);

    return {
      toDo: toDo,
    };
  }
}

export default CreateToDoUseCase;
