import ListToDoListsOutput from "../ports/output/list-to-do-lists-output";

interface IListToDoListsUsecase {
  Execute(): ListToDoListsOutput;
}

export default IListToDoListsUsecase;
