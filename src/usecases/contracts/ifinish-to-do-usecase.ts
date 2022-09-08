import FinishToDoInput from "../ports/input/finish-to-do-input";

interface IFinishToDoUsecase {
  execute(finishToDoInput: FinishToDoInput): boolean;
}

export default IFinishToDoUsecase;
