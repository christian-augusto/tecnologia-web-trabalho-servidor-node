import CreateToDoListUseCase from "@use_cases/create-to-do-list-use-case";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import { faker } from "@faker-js/faker";
import ToDoList from "@entities/to-do-list";

describe("CreateToDoListUseCase", function () {
  describe("execute function", function () {
    it("creates the to do list", function () {
      const toDoList: ToDoList = {
        id: Number(faker.random.numeric()),
      };

      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.createToDoList = jest.fn().mockImplementation(function () {
        return toDoList;
      });

      const createToDoListUseCase = new CreateToDoListUseCase(memoryDBRepositories);
      const result = createToDoListUseCase.execute();

      expect(memoryDBRepositories.createToDoList).toBeCalledTimes(1);

      expect(result.toDoList.id).toEqual(toDoList.id);
    });
  });
});
