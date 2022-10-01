import { faker } from "@faker-js/faker";

import ToDosRepository from "@tests/mocks/to-dos-repository";
import UnfinishToDoUseCase from "@use_cases/unfinish-to-do-use-case";
import UnfinishToDoInput from "@use_cases/ports/inputs/unfinish-to-do-input";

describe("UnfinishToDoUseCase", function () {
  const toDosRepository = new ToDosRepository();

  describe("execute function", function () {
    it("when unfinish to do has success", function () {
      toDosRepository.unfinishToDo = jest.fn().mockImplementation(function () {
        return true;
      });

      const unfinishToDoInput: UnfinishToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const finishToDoUseCase = new UnfinishToDoUseCase(toDosRepository);
      const result = finishToDoUseCase.execute(unfinishToDoInput);

      expect(result).toBeTruthy();

      expect(toDosRepository.unfinishToDo).toBeCalledTimes(1);
      expect(toDosRepository.unfinishToDo).toBeCalledWith(unfinishToDoInput.id);
    });

    it("when unfinish to do has success", function () {
      toDosRepository.unfinishToDo = jest.fn().mockImplementation(function () {
        return false;
      });

      const unfinishToDoInput: UnfinishToDoInput = {
        id: Number(faker.random.numeric()),
      };

      const finishToDoUseCase = new UnfinishToDoUseCase(toDosRepository);
      const result = finishToDoUseCase.execute(unfinishToDoInput);

      expect(result).toBeFalsy();

      expect(toDosRepository.unfinishToDo).toBeCalledTimes(1);
      expect(toDosRepository.unfinishToDo).toBeCalledWith(unfinishToDoInput.id);
    });
  });
});
