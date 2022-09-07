import CreateToDoListOutput from "../ports/ouput/create-to-do-list-output";

interface ICreateToDoListUsecase {
  Execute(): CreateToDoListOutput;
}

export default ICreateToDoListUsecase;
