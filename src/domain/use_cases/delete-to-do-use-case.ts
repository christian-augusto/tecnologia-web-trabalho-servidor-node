import IToDosRepository from "@use_cases/repositories/ito-dos-repository";
import IDeleteToDoUseCase from "./contracts/idelete-to-do-list-use-case";
import DeleteToDoInput from "./ports/inputs/delete-to-do-list-input";

class DeleteToDoUseCase implements IDeleteToDoUseCase {
  private toDosRepository: IToDosRepository;

  constructor(toDosRepository: IToDosRepository) {
    this.toDosRepository = toDosRepository;
  }

  public execute(deleteToDoInput: DeleteToDoInput): void {
    this.toDosRepository.deleteToDoById(deleteToDoInput.id);
  }
}

export default DeleteToDoUseCase;
