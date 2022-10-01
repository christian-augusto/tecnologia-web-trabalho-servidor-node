import { faker } from "@faker-js/faker";

import ToDosRepository from "@tests/mocks/to-dos-repository";
import ToDo from "@entities/to-do";
import ListToDosUseCase from "@use_cases/list-to-dos-use-case";
import ListToDosInput from "@use_cases/ports/inputs/list-to-dos-input";

describe("ListToDosUseCase", function () {
  const toDosRepository = new ToDosRepository();

  describe("execute function", function () {
    it("returns empty", function () {
      const listToDosInput: ListToDosInput = {
        to_do_list_id: Number(faker.random.numeric()),
      };
      const toDos: ToDo[] = [];

      toDosRepository.getToDos = jest.fn().mockImplementation(function () {
        return toDos;
      });

      const listToDosUseCase = new ListToDosUseCase(toDosRepository);
      const result = listToDosUseCase.execute(listToDosInput);

      expect(result.to_dos.length).toEqual(toDos.length);

      expect(toDosRepository.getToDos).toBeCalledTimes(1);
    });

    it("returns all the to dos", function () {
      const listToDosInput: ListToDosInput = {
        to_do_list_id: Number(faker.random.numeric()),
      };
      const toDos: ToDo[] = [
        {
          id: Number(faker.random.numeric()) + 1,
          text: faker.lorem.sentence(),
          finished_at: null,
          to_do_list_id: listToDosInput.to_do_list_id,
        },
        {
          id: Number(faker.random.numeric()) + 2,
          text: faker.lorem.sentence(),
          finished_at: Date.now(),
          to_do_list_id: listToDosInput.to_do_list_id,
        },
        {
          id: Number(faker.random.numeric()) + 3,
          text: faker.lorem.sentence(),
          finished_at: Date.now() + 5,
          to_do_list_id: listToDosInput.to_do_list_id,
        },
        {
          id: Number(faker.random.numeric()) + 4,
          text: faker.lorem.sentence(),
          finished_at: Date.now() + 6,
          to_do_list_id: listToDosInput.to_do_list_id + 1,
        },
      ];

      toDosRepository.getToDos = jest.fn().mockImplementation(function () {
        return toDos.filter((toDo: ToDo) => toDo.to_do_list_id == listToDosInput.to_do_list_id);
      });

      const listToDosUseCase = new ListToDosUseCase(toDosRepository);
      const result = listToDosUseCase.execute(listToDosInput);

      expect(result.to_dos.length).toEqual(
        toDos.filter((toDo: ToDo) => toDo.to_do_list_id == listToDosInput.to_do_list_id).length,
      );

      expect(result.to_dos[0].id).toEqual(toDos[0].id);
      expect(result.to_dos[0].text).toEqual(toDos[0].text);
      expect(result.to_dos[0].finished_at).toEqual(toDos[0].finished_at);
      expect(result.to_dos[0].to_do_list_id).toEqual(toDos[0].to_do_list_id);

      expect(result.to_dos[1].id).toEqual(toDos[1].id);
      expect(result.to_dos[1].text).toEqual(toDos[1].text);
      expect(result.to_dos[1].finished_at).toEqual(toDos[1].finished_at);
      expect(result.to_dos[1].to_do_list_id).toEqual(toDos[1].to_do_list_id);

      expect(result.to_dos[2].id).toEqual(toDos[2].id);
      expect(result.to_dos[2].text).toEqual(toDos[2].text);
      expect(result.to_dos[2].finished_at).toEqual(toDos[2].finished_at);
      expect(result.to_dos[2].to_do_list_id).toEqual(toDos[2].to_do_list_id);

      expect(toDosRepository.getToDos).toBeCalledTimes(1);
    });
  });
});
