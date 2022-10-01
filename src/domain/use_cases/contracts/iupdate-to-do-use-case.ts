import UpdateToDoInput from "../ports/inputs/update-to-do-input";

interface IUpdateToDoUseCase {
  execute(updateToDoInput: UpdateToDoInput): boolean;
}

export default IUpdateToDoUseCase;
