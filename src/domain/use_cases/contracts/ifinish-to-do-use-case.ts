import FinishToDoInput from "../ports/inputs/finish-to-do-input";

interface IFinishToDoUseCase {
  execute(finishToDoInput: FinishToDoInput): boolean;
}

export default IFinishToDoUseCase;
