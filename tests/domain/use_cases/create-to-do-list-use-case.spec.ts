import CreateToDoListUseCase from "@use_cases/create-to-do-list-use-case";
import ToDoListsRepository from "@tests/mocks/to-do-lists-repository";
import { faker } from "@faker-js/faker";
import ToDoList from "@entities/to-do-list";

describe("CreateToDoListUseCase", function () {
  const toDoListsRepository = new ToDoListsRepository();

  describe("execute function", function () {
    it("creates the to do list", function () {
      const toDoList: ToDoList = {
        id: Number(faker.random.numeric()),
      };

      toDoListsRepository.createToDoList = jest.fn().mockImplementation(function () {
        return toDoList;
      });

      const createToDoListUseCase = new CreateToDoListUseCase(toDoListsRepository);
      const result = createToDoListUseCase.execute();

      expect(toDoListsRepository.createToDoList).toBeCalledTimes(1);

      expect(result.toDoList.id).toEqual(toDoList.id);
    });
  });
});
