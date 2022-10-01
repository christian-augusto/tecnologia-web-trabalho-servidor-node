import { faker } from "@faker-js/faker";

import ToDo from "@entities/to-do";
import IToDosRepository from "@use_cases/repositories/ito-dos-repository";

class ToDosRepository implements IToDosRepository {
  public createToDo = (text: string, to_do_list_id: number): ToDo => {
    return {
      id: Number(faker.random.numeric()),
      finished_at: null,
      text: faker.lorem.sentence(),
      to_do_list_id: Number(faker.random.numeric()),
    };
  };

  public getToDos = (toDoListId: number): ToDo[] => {
    return [
      {
        id: Number(faker.random.numeric()),
        finished_at: null,
        text: faker.lorem.sentence(),
        to_do_list_id: Number(faker.random.numeric()),
      },
    ];
  };

  public getToDosByToDoListId = (toDoListId: number): ToDo[] => {
    return [
      {
        id: Number(faker.random.numeric()),
        finished_at: null,
        text: faker.lorem.sentence(),
        to_do_list_id: Number(faker.random.numeric()),
      },
    ];
  };

  public deleteToDoById = (id: number): boolean => true;

  public updateToDo = (id: number, text: string): boolean => true;

  public finishToDo = (id: number): boolean => true;

  public unfinishToDo = (id: number): boolean => true;
}

export default ToDosRepository;
