import CreateToDoListUsecase from "@usecases/create-to-do-list-usecase";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";
import ToDoList from "@entities/to-do-list";

describe("CreateToDoListUsecase", function () {
  describe("execute function", function () {
    it("creates the to do list", function () {
      const toDoList: ToDoList = {
        id: Number(faker.random.numeric()),
      };

      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.createToDoList = jest.fn().mockImplementation(function () {
        return toDoList;
      });

      const createToDoListUsecase = new CreateToDoListUsecase(memoryDBRepositories);
      const result = createToDoListUsecase.execute();

      expect(result).toBeTruthy();

      expect(memoryDBRepositories.createToDoList).toBeCalledTimes(1);

      expect(result.toDoList.id).toEqual(toDoList.id);
    });
  });
});
