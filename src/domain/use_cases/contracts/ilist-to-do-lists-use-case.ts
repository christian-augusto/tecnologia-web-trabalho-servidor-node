import ListToDoListsOutput from "../ports/outputs/list-to-do-lists-output";

interface IListToDoListsUseCase {
  execute(): ListToDoListsOutput;
}

export default IListToDoListsUseCase;
