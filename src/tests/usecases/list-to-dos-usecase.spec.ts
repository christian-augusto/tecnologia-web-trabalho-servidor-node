import { faker } from "@faker-js/faker";

import ListToDosUsecase from "@usecases/list-to-dos-usecase";
import MemoryDB from "@persistence/memory-db/index";
import MemoryDBRepositories from "@persistence/memory-db/repositories";
import ToDo from "@entities/to-do";
import ListToDosInput from "@usecases/ports/input/list-to-dos-input";

describe("ListToDosUsecase", function () {
  describe("execute function", function () {
    it("returns empty", function () {
      const listToDosInput: ListToDosInput = {
        to_do_list_id: Number(faker.random.numeric()),
      };
      const toDos: Array<ToDo> = [];
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.getToDos = jest.fn().mockImplementation(function () {
        return toDos;
      });

      const listToDosUsecase = new ListToDosUsecase(memoryDBRepositories);
      const result = listToDosUsecase.execute(listToDosInput);

      expect(result.to_dos.length).toEqual(toDos.length);

      expect(memoryDBRepositories.getToDos).toBeCalledTimes(1);
    });

    it("returns all the to dos", function () {
      const listToDosInput: ListToDosInput = {
        to_do_list_id: Number(faker.random.numeric()),
      };
      const toDos: Array<ToDo> = [
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
      const memoryDBRepositories = new MemoryDBRepositories(new MemoryDB());

      memoryDBRepositories.getToDos = jest.fn().mockImplementation(function () {
        return toDos.filter((toDo: ToDo) => toDo.to_do_list_id == listToDosInput.to_do_list_id);
      });

      const listToDosUsecase = new ListToDosUsecase(memoryDBRepositories);
      const result = listToDosUsecase.execute(listToDosInput);

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

      expect(memoryDBRepositories.getToDos).toBeCalledTimes(1);
    });
  });
});
