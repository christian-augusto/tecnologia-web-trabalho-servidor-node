import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import IUpdateToDoUseCase from "./contracts/iupdate-to-do-use-case";
import UpdateToDoInput from "./ports/inputs/update-to-do-input";

class UpdateToDoUseCase implements IUpdateToDoUseCase {
  private toDoListRepository: ITodoListRepository;

  constructor(toDoListRepository: ITodoListRepository) {
    this.toDoListRepository = toDoListRepository;
  }

  public execute(updateToDoInput: UpdateToDoInput): boolean {
    return this.toDoListRepository.updateToDo(updateToDoInput.id, updateToDoInput.text);
  }
}

export default UpdateToDoUseCase;
