import ListToDosOutput from "../ports/output/list-to-dos-output";

interface IListToDosUsecase {
  execute(): ListToDosOutput;
}

export default IListToDosUsecase;
