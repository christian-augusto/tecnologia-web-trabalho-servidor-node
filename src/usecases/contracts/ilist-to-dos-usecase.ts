import ListToDosOutput from "../ports/output/list-to-dos-output";

interface IListToDosUsecase {
  Execute(): ListToDosOutput;
}

export default IListToDosUsecase;
