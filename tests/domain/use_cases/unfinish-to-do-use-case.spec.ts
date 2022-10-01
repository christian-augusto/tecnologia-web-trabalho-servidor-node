import UnfinishToDoUseCase from "@use_cases/unfinish-to-do-use-case";
import UnfinishToDoInput from "@use_cases/ports/inputs/unfinish-to-do-input";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";

describe("UnfinishToDoUseCase", function () {
  describe("execute function", function () {
    it("when unfinish to do has success", function () {
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.unfinishToDo = jest.fn().mockImplementation(function () {
        return true;
      });

      const unfinishToDoInput: UnfinishToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const finishToDoUseCase = new UnfinishToDoUseCase(memoryDBRepositories);
      const result = finishToDoUseCase.execute(unfinishToDoInput);

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

      const finishToDoUseCase = new UnfinishToDoUseCase(memoryDBRepositories);
      const result = finishToDoUseCase.execute(unfinishToDoInput);

      expect(result).toBeFalsy();

      expect(memoryDBRepositories.unfinishToDo).toBeCalledTimes(1);
      expect(memoryDBRepositories.unfinishToDo).toBeCalledWith(unfinishToDoInput.id);
    });
  });
});
