import IToDosRepository from "@use_cases/repositories/ito-dos-repository";
import IListToDosUseCase from "./contracts/ilist-to-dos-use-case";
import ListToDosInput from "./ports/inputs/list-to-dos-input";
import ListToDosOutput from "./ports/outputs/list-to-dos-output";

class ListToDosUseCase implements IListToDosUseCase {
  private toDosRepository: IToDosRepository;

  constructor(toDosRepository: IToDosRepository) {
    this.toDosRepository = toDosRepository;
  }

  public execute(listToDosInput: ListToDosInput): ListToDosOutput {
    const toDos = this.toDosRepository.getToDos(listToDosInput.to_do_list_id);

    return {
      to_dos: toDos,
    };
  }
}

export default ListToDosUseCase;
