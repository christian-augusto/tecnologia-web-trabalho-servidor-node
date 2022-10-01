import UnfinishToDoInput from "../ports/inputs/unfinish-to-do-input";

interface IUnfinishToDoUseCase {
  execute(finishToDoInput: UnfinishToDoInput): boolean;
}

export default IUnfinishToDoUseCase;
