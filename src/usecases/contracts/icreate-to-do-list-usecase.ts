import CreateToDoListOutput from "../ports/output/create-to-do-list-output";

interface ICreateToDoListUsecase {
  execute(): CreateToDoListOutput;
}

export default ICreateToDoListUsecase;
