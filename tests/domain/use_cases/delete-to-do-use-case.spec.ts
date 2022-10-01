import DeleteToDoUseCase from "@use_cases/delete-to-do-use-case";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";
import DeleteToDoInput from "@use_cases/ports/inputs/delete-to-do-input";

describe("DeleteToDoUseCase", function () {
  describe("execute function", function () {
    it("success deletion", function () {
      const deleteToDoInput: DeleteToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.deleteToDoById = jest.fn().mockImplementation(function () {
        return true;
      });

      const deleteToDoListUseCase = new DeleteToDoUseCase(memoryDBRepositories);
      deleteToDoListUseCase.execute(deleteToDoInput);

      expect(memoryDBRepositories.deleteToDoById).toBeCalledTimes(1);
      expect(memoryDBRepositories.deleteToDoById).toBeCalledWith(deleteToDoInput.id);
    });
  });
});
