import UnfinishToDoUsecase from "@usecases/unfinish-to-do-usecase";
import UnfinishToDoInput from "@usecases/ports/input/unfinish-to-do-input";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";

describe("UnfinishToDoUsecase", function () {
  describe("execute function", function () {
    it("when unfinish to do has success", function () {
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.unfinishToDo = jest.fn().mockImplementation(function () {
        return true;
      });

      const unfinishToDoInput: UnfinishToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const finishToDoUsecase = new UnfinishToDoUsecase(memoryDBRepositories);
      const result = finishToDoUsecase.execute(unfinishToDoInput);

      expect(result).toBeTruthy();

      expect(memoryDBRepositories.unfinishToDo).toBeCalledTimes(1);
      expect(memoryDBRepositories.unfinishToDo).toBeCalledWith(unfinishToDoInput.id);
    });

    it("when unfinish to do has success", function () {
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.unfinishToDo = jest.fn().mockImplementation(function () {
        return false;
      });

      const unfinishToDoInput: UnfinishToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const finishToDoUsecase = new UnfinishToDoUsecase(memoryDBRepositories);
      const result = finishToDoUsecase.execute(unfinishToDoInput);

      expect(result).toBeFalsy();

      expect(memoryDBRepositories.unfinishToDo).toBeCalledTimes(1);
      expect(memoryDBRepositories.unfinishToDo).toBeCalledWith(unfinishToDoInput.id);
    });
  });
});
