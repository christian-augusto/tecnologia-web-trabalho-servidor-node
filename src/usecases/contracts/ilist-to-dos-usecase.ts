import ListToDosInput from "@usecases/ports/input/list-to-dos-input";
import ListToDosOutput from "../ports/output/list-to-dos-output";

interface IListToDosUsecase {
  execute(listToDosInput: ListToDosInput): ListToDosOutput;
}

export default IListToDosUsecase;
