import DeleteToDoUsecase from "@usecases/delete-to-do-usecase";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";
import DeleteToDoInput from "@usecases/ports/input/delete-to-do-input";

describe("DeleteToDoUsecase", function () {
  describe("execute function", function () {
    it("success deletion", function () {
      const deleteToDoInput: DeleteToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.deleteToDoById = jest.fn().mockImplementation(function () {
        return true;
      });

      const deleteToDoListUsecase = new DeleteToDoUsecase(memoryDBRepositories);
      deleteToDoListUsecase.execute(deleteToDoInput);

      expect(memoryDBRepositories.deleteToDoById).toBeCalledTimes(1);
      expect(memoryDBRepositories.deleteToDoById).toBeCalledWith(deleteToDoInput.id);
    });
  });
});
