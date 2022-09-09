import DeleteToDoListUsecase from "@usecases/delete-to-do-list-usecase";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";
import DeleteToDoListInput from "@usecases/ports/input/delete-to-do-list-input";

describe("DeleteToDoListUsecase", function () {
  describe("execute function", function () {
    it("returns true", function () {
      const deleteToDoListInput: DeleteToDoListInput = {
        id: Number(faker.random.numeric()),
      };

      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.deleteToDoListById = jest.fn().mockImplementation(function () {
        return true;
      });

      const deleteToDoListUsecase = new DeleteToDoListUsecase(memoryDBRepositories);
      deleteToDoListUsecase.execute(deleteToDoListInput);

      expect(memoryDBRepositories.deleteToDoListById).toBeCalledTimes(1);
      expect(memoryDBRepositories.deleteToDoListById).toBeCalledWith(deleteToDoListInput.id);
    });
  });
});
