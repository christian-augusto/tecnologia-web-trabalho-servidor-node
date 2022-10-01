import FinishToDoUseCase from "@use_cases/finish-to-do-use-case";
import FinishToDoInput from "@use_cases/ports/inputs/finish-to-do-input";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";

describe("FinishToDoUseCase", function () {
  describe("execute function", function () {
    it("when finish to do has success", function () {
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.finishToDo = jest.fn().mockImplementation(function () {
        return true;
      });

      const finishToDoInput: FinishToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const finishToDoUseCase = new FinishToDoUseCase(memoryDBRepositories);
      const result = finishToDoUseCase.execute(finishToDoInput);

      expect(result).toBeTruthy();

      expect(memoryDBRepositories.finishToDo).toBeCalledTimes(1);
      expect(memoryDBRepositories.finishToDo).toBeCalledWith(finishToDoInput.id);
    });

    it("when finish to do has success", function () {
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.finishToDo = jest.fn().mockImplementation(function () {
        return false;
      });

      const finishToDoInput: FinishToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const finishToDoUseCase = new FinishToDoUseCase(memoryDBRepositories);
      const result = finishToDoUseCase.execute(finishToDoInput);

      expect(result).toBeFalsy();

      expect(memoryDBRepositories.finishToDo).toBeCalledTimes(1);
      expect(memoryDBRepositories.finishToDo).toBeCalledWith(finishToDoInput.id);
    });
  });
});
