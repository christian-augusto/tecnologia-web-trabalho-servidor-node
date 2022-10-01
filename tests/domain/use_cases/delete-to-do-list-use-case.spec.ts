import DeleteToDoListUseCase from "@use_cases/delete-to-do-list-use-case";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";
import DeleteToDoListInput from "@use_cases/ports/inputs/delete-to-do-list-input";

describe("DeleteToDoListUseCase", function () {
  describe("execute function", function () {
    it("success deletion", function () {
      const deleteToDoListInput: DeleteToDoListInput = {
        id: Number(faker.random.numeric()),
      };

      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.deleteToDoListById = jest.fn().mockImplementation(function () {
        return true;
      });

      const deleteToDoListUseCase = new DeleteToDoListUseCase(memoryDBRepositories);
      deleteToDoListUseCase.execute(deleteToDoListInput);

      expect(memoryDBRepositories.deleteToDoListById).toBeCalledTimes(1);
      expect(memoryDBRepositories.deleteToDoListById).toBeCalledWith(deleteToDoListInput.id);
    });
  });
});
