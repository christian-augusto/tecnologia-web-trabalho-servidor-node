import DeleteToDoListUseCase from "@use_cases/delete-to-do-list-use-case";
import ToDoListsRepository from "@tests/mocks/to-do-lists-repository";
import { faker } from "@faker-js/faker";
import DeleteToDoListInput from "@use_cases/ports/inputs/delete-to-do-list-input";

describe("DeleteToDoListUseCase", function () {
  const toDoListsRepository = new ToDoListsRepository();

  describe("execute function", function () {
    it("success deletion", function () {
      const deleteToDoListInput: DeleteToDoListInput = {
        id: Number(faker.random.numeric()),
      };

      toDoListsRepository.deleteToDoListById = jest.fn().mockImplementation(function () {
        return true;
      });

      const deleteToDoListUseCase = new DeleteToDoListUseCase(toDoListsRepository);
      deleteToDoListUseCase.execute(deleteToDoListInput);

      expect(toDoListsRepository.deleteToDoListById).toBeCalledTimes(1);
      expect(toDoListsRepository.deleteToDoListById).toBeCalledWith(deleteToDoListInput.id);
    });
  });
});
