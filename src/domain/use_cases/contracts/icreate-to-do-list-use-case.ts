import CreateToDoListOutput from "../ports/outputs/create-to-do-list-output";

interface ICreateToDoListUseCase {
  execute(): CreateToDoListOutput;
}

export default ICreateToDoListUseCase;
