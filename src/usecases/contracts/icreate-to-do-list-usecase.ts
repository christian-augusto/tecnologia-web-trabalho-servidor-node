import CreateToDoListOutput from "../ports/output/create-to-do-list-output";

interface ICreateToDoListUsecase {
  Execute(): CreateToDoListOutput;
}

export default ICreateToDoListUsecase;
