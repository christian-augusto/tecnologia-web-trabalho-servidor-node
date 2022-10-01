import ListToDosInput from "@use_cases/ports/inputs/list-to-dos-input";
import ListToDosOutput from "../ports/outputs/list-to-dos-output";

interface IListToDosUseCase {
  execute(listToDosInput: ListToDosInput): ListToDosOutput;
}

export default IListToDosUseCase;
