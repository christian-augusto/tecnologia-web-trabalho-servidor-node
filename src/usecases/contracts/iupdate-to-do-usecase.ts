import UpdateToDoInput from "../ports/input/update-to-do-input";

interface IUpdateToDoUsecase {
  execute(updateToDoInput: UpdateToDoInput): boolean;
}

export default IUpdateToDoUsecase;
