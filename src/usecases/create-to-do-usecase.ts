import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import ICreateToDoUsecase from "./contracts/icreate-to-do-usecase";
import CreateToDoInput from "./ports/input/create-to-do-input";
import CreateToDoOutput from "./ports/output/create-to-do-output";

class CreateToDoUsecase implements ICreateToDoUsecase {
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

export default CreateToDoUsecase;
