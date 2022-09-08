import UnfinishToDoInput from "../ports/input/unfinish-to-do-input";

interface IUnfinishToDoUsecase {
  execute(finishToDoInput: UnfinishToDoInput): boolean;
}

export default IUnfinishToDoUsecase;
