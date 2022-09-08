import CreateToDoOutput from "../ports/output/create-to-do-output";

interface ICreateToDoUsecase {
  execute(createToDoInput: CreateToDoInput): CreateToDoOutput;
}

export default ICreateToDoUsecase;
