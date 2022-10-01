import { faker } from "@faker-js/faker";

import ToDosRepository from "@tests/mocks/to-dos-repository";
import FinishToDoUseCase from "@use_cases/finish-to-do-use-case";
import FinishToDoInput from "@use_cases/ports/inputs/finish-to-do-input";

describe("FinishToDoUseCase", function () {
  const toDosRepository = new ToDosRepository();

  describe("execute function", function () {
    it("when finish to do has success", function () {
      toDosRepository.finishToDo = jest.fn().mockImplementation(function () {
        return true;
      });

      const finishToDoInput: FinishToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const finishToDoUseCase = new FinishToDoUseCase(toDosRepository);
      const result = finishToDoUseCase.execute(finishToDoInput);

      expect(result).toBeTruthy();

      expect(toDosRepository.finishToDo).toBeCalledTimes(1);
      expect(toDosRepository.finishToDo).toBeCalledWith(finishToDoInput.id);
    });

    it("when finish to do has success", function () {
      toDosRepository.finishToDo = jest.fn().mockImplementation(function () {
        return false;
      });

      const finishToDoInput: FinishToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const finishToDoUseCase = new FinishToDoUseCase(toDosRepository);
      const result = finishToDoUseCase.execute(finishToDoInput);

      expect(result).toBeFalsy();

      expect(toDosRepository.finishToDo).toBeCalledTimes(1);
      expect(toDosRepository.finishToDo).toBeCalledWith(finishToDoInput.id);
    });
  });
});
