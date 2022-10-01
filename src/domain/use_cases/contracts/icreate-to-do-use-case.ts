import CreateToDoInput from "../ports/inputs/create-to-do-input";
import CreateToDoOutput from "../ports/outputs/create-to-do-output";

interface ICreateToDoUseCase {
  execute(createToDoInput: CreateToDoInput): CreateToDoOutput;
}

export default ICreateToDoUseCase;
