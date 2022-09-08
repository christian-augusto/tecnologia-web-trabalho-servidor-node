import ListToDoListsOutput from "../ports/output/list-to-do-lists-output";

interface IListToDoListsUsecase {
  execute(): ListToDoListsOutput;
}

export default IListToDoListsUsecase;
