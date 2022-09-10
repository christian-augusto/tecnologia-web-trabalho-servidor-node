import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import IUpdateToDoUsecase from "./contracts/iupdate-to-do-usecase";
import UpdateToDoInput from "./ports/input/update-to-do-input";

class UpdateToDoUsecase implements IUpdateToDoUsecase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(updateToDoInput: UpdateToDoInput): boolean {
    return this.toDoListRepository.updateToDo(updateToDoInput.id, updateToDoInput.text);
  }
}

export default UpdateToDoUsecase;
