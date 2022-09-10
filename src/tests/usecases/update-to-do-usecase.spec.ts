import UpdateToDoUsecase from "@usecases/update-to-do-usecase";
import UpdateToDoInput from "@usecases/ports/input/update-to-do-input";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";

describe("UpdateToDoUsecase", function () {
  describe("execute function", function () {
    it("when update to do has success", function () {
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.updateToDo = jest.fn().mockImplementation(function () {
        return true;
      });

      const updateToDoInput: UpdateToDoInput = {
        id: Number(faker.random.numeric()),
        text: faker.lorem.sentence(),
      };

      const updateToDoUsecase = new UpdateToDoUsecase(memoryDBRepositories);
      const result = updateToDoUsecase.execute(updateToDoInput);

      expect(result).toBeTruthy();

      expect(memoryDBRepositories.updateToDo).toBeCalledTimes(1);
      expect(memoryDBRepositories.updateToDo).toBeCalledWith(updateToDoInput.id, updateToDoInput.text);
    });

    it("when update to do has success", function () {
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.updateToDo = jest.fn().mockImplementation(function () {
        return false;
      });

      const updateToDoInput: UpdateToDoInput = {
        id: Number(faker.random.numeric()),
        text: faker.lorem.sentence(),
      };

      const updateToDoUsecase = new UpdateToDoUsecase(memoryDBRepositories);
      const result = updateToDoUsecase.execute(updateToDoInput);

      expect(result).toBeFalsy();

      expect(memoryDBRepositories.updateToDo).toBeCalledTimes(1);
      expect(memoryDBRepositories.updateToDo).toBeCalledWith(updateToDoInput.id, updateToDoInput.text);
    });
  });
});
