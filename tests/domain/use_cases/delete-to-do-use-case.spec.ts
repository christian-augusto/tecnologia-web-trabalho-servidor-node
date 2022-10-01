import { faker } from "@faker-js/faker";

import ToDosRepository from "@tests/mocks/to-dos-repository";
import DeleteToDoUseCase from "@use_cases/delete-to-do-use-case";
import DeleteToDoInput from "@use_cases/ports/inputs/delete-to-do-input";

describe("DeleteToDoUseCase", function () {
  const toDosRepository = new ToDosRepository();

  describe("execute function", function () {
    it("success deletion", function () {
      const deleteToDoInput: DeleteToDoInput = {
        id: Number(faker.random.numeric()),
      };

      toDosRepository.deleteToDoById = jest.fn().mockImplementation(function () {
        return true;
      });

      const deleteToDoListUseCase = new DeleteToDoUseCase(toDosRepository);
      deleteToDoListUseCase.execute(deleteToDoInput);

      expect(toDosRepository.deleteToDoById).toBeCalledTimes(1);
      expect(toDosRepository.deleteToDoById).toBeCalledWith(deleteToDoInput.id);
    });
  });
});
