import ListToDoListsOutput from "../ports/ouput/list-to-do-lists-output";

interface IListToDoListsUsecase {
  Execute(): ListToDoListsOutput;
}

export default IListToDoListsUsecase;
