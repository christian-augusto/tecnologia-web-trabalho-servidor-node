import { faker } from "@faker-js/faker";

import ToDoList from "@entities/to-do-list";
import IToDoListsRepository from "@use_cases/repositories/ito-do-lists-repository";

class ToDoListsRepository implements IToDoListsRepository {
  public createToDoList = (): ToDoList => {
    return {
      id: Number(faker.random.numeric()),
    };
  };

  public getToDoLists = (): ToDoList[] => {
    return [
      {
        id: Number(faker.random.numeric()),
      },
    ];
  };

  public deleteToDoListById = (id: number): boolean => true;
}

export default ToDoListsRepository;
