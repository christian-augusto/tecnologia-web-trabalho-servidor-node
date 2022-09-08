import CreateToDoUsecase from "@usecases/create-to-do-usecase";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";
import ToDo from "@entities/to-do";
import CreateToDoInput from "@usecases/ports/input/create-to-do-input";

describe("CreateToDoUsecase", function () {
  describe("execute function", function () {
    it("creates the to do list", function () {
      const toDo: ToDo = {
        id: Number(faker.random.numeric()),
        text: faker.lorem.sentence(),
        finished_at: null,
        to_do_list_id: Number(faker.random.numeric()),
      };

      const createToDoInput: CreateToDoInput = {
        text: toDo.text,
        to_do_list_id: toDo.to_do_list_id,
      };

      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.createToDo = jest.fn().mockImplementation(function () {
        return toDo;
      });

      const createToDoUsecase = new CreateToDoUsecase(memoryDBRepositories);
      const result = createToDoUsecase.execute(createToDoInput);

      expect(result).toBeTruthy();

      expect(memoryDBRepositories.createToDo).toBeCalledTimes(1);
      expect(memoryDBRepositories.createToDo).toBeCalledWith(createToDoInput.text, createToDoInput.to_do_list_id);

      expect(result.toDo.id).toEqual(toDo.id);
      expect(result.toDo.text).toEqual(toDo.text);
      expect(result.toDo.finished_at).toEqual(toDo.finished_at);
      expect(result.toDo.to_do_list_id).toEqual(toDo.to_do_list_id);
    });
  });
});
