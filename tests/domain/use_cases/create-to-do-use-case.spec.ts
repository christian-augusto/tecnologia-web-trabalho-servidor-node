import { faker } from "@faker-js/faker";

import ToDosRepository from "@tests/mocks/to-dos-repository";
import ToDo from "@entities/to-do";
import CreateToDoUseCase from "@use_cases/create-to-do-use-case";
import CreateToDoInput from "@use_cases/ports/inputs/create-to-do-input";

describe("CreateToDoUseCase", function () {
  const toDosRepository = new ToDosRepository();

  describe("execute function", function () {
    it("creates the to do list", function () {
      const toDo: ToDo = {
        id: Number(faker.random.numeric()),
        text: faker.lorem.sentence(),
        finished_at: null,
        to_do_list_id: Number(faker.random.numeric()),
      };

      const createToDoInput: CreateToDoInput = {
        text: toDo.text,
        to_do_list_id: toDo.to_do_list_id,
      };

      toDosRepository.createToDo = jest.fn().mockImplementation(function () {
        return toDo;
      });

      const createToDoUseCase = new CreateToDoUseCase(toDosRepository);
      const result = createToDoUseCase.execute(createToDoInput);

      expect(toDosRepository.createToDo).toBeCalledTimes(1);
      expect(toDosRepository.createToDo).toBeCalledWith(createToDoInput.text, createToDoInput.to_do_list_id);

      expect(result.toDo.id).toEqual(toDo.id);
      expect(result.toDo.text).toEqual(toDo.text);
      expect(result.toDo.finished_at).toEqual(toDo.finished_at);
      expect(result.toDo.to_do_list_id).toEqual(toDo.to_do_list_id);
    });
  });
});
