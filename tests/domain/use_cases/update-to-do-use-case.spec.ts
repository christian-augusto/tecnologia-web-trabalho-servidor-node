import { faker } from "@faker-js/faker";

import ToDosRepository from "@tests/mocks/to-dos-repository";
import UpdateToDoUseCase from "@use_cases/update-to-do-use-case";
import UpdateToDoInput from "@use_cases/ports/inputs/update-to-do-input";

describe("UpdateToDoUseCase", function () {
  const toDosRepository = new ToDosRepository();

  describe("execute function", function () {
    it("when update to do has success", function () {
      toDosRepository.updateToDo = jest.fn().mockImplementation(function () {
        return true;
      });

      const updateToDoInput: UpdateToDoInput = {
        id: Number(faker.random.numeric()),
        text: faker.lorem.sentence(),
      };

      const updateToDoUseCase = new UpdateToDoUseCase(toDosRepository);
      const result = updateToDoUseCase.execute(updateToDoInput);

      expect(result).toBeTruthy();

      expect(toDosRepository.updateToDo).toBeCalledTimes(1);
      expect(toDosRepository.updateToDo).toBeCalledWith(updateToDoInput.id, updateToDoInput.text);
    });

    it("when update to do has success", function () {
      toDosRepository.updateToDo = jest.fn().mockImplementation(function () {
        return false;
      });

      const updateToDoInput: UpdateToDoInput = {
        id: Number(faker.random.numeric()),
        text: faker.lorem.sentence(),
      };

      const updateToDoUseCase = new UpdateToDoUseCase(toDosRepository);
      const result = updateToDoUseCase.execute(updateToDoInput);

      expect(result).toBeFalsy();

      expect(toDosRepository.updateToDo).toBeCalledTimes(1);
      expect(toDosRepository.updateToDo).toBeCalledWith(updateToDoInput.id, updateToDoInput.text);
    });
  });
});
