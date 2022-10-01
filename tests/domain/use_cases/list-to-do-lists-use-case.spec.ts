import { faker } from "@faker-js/faker";

import ListToDoListsUseCase from "@use_cases/list-to-do-lists-use-case";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import ToDoList from "@entities/to-do-list";

describe("ListToDoListsUseCase", function () {
  describe("execute function", function () {
    it("returns empty", function () {
      const toDoLists: ToDoList[] = [];
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.getToDoLists = jest.fn().mockImplementation(function () {
        return toDoLists;
      });

      const listToDoListsUseCase = new ListToDoListsUseCase(memoryDBRepositories);
      const result = listToDoListsUseCase.execute();

      expect(result.to_do_lists.length).toEqual(toDoLists.length);

      expect(memoryDBRepositories.getToDoLists).toBeCalledTimes(1);
    });

    it("returns all the to do lists", function () {
      const toDoLists: ToDoList[] = [
        {
          id: Number(faker.random.numeric()) + 1,
        },
        {
          id: Number(faker.random.numeric()) + 2,
        },
        {
          id: Number(faker.random.numeric()) + 3,
        },
      ];
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.getToDoLists = jest.fn().mockImplementation(function () {
        return toDoLists;
      });

      const listToDoListsUseCase = new ListToDoListsUseCase(memoryDBRepositories);
      const result = listToDoListsUseCase.execute();

      expect(result.to_do_lists.length).toEqual(toDoLists.length);

      expect(result.to_do_lists[0].id).toEqual(toDoLists[0].id);

      expect(result.to_do_lists[1].id).toEqual(toDoLists[1].id);

      expect(result.to_do_lists[2].id).toEqual(toDoLists[2].id);

      expect(memoryDBRepositories.getToDoLists).toBeCalledTimes(1);
    });
  });
});
