import IToDoListsRepository from "@use_cases/repositories/ito-do-lists-repository";
import ToDo from "@entities/to-do";
import ToDoList from "@entities/to-do-list";
import MemoryDb from "@infra/persistence/memory-db";

class MemoryDbToDoListsRepository implements IToDoListsRepository {
  private memoryDb: MemoryDb;

  constructor(memoryDb: MemoryDb) {
    this.memoryDb = memoryDb;
  }

  public createToDoList = (): ToDoList => {
    const toDoList: ToDoList = {
      id: null,
    };

    const toDoLists = this.memoryDb.getToDoLists();

    if (toDoLists.length == 0) {
      toDoList.id = 1;
    } else {
      toDoList.id = Number(toDoLists[toDoLists.length - 1].id) + 1;
    }

    toDoLists.push(toDoList);

    return toDoList;
  };

  public getToDoLists = (): ToDoList[] => {
    return this.memoryDb.getToDoLists();
  };

  public deleteToDoListById = (id: number): boolean => {
    const toDoLists = this.memoryDb.getToDoLists();

    const newToDoLists = toDoLists.filter((toDoList: ToDoList) => {
      return toDoList.id != id;
    });

    this.deleteToDosByToDoListId(id);

    this.memoryDb.setToDoLists(newToDoLists);

    return true;
  };

  private deleteToDosByToDoListId = (toDoListId: number): boolean => {
    const toDos = this.memoryDb.getToDos();

    const newToDos = toDos.filter((toDo: ToDo) => {
      return toDo.to_do_list_id != toDoListId;
    });

    this.memoryDb.setToDos(newToDos);

    return true;
  };
}

export default MemoryDbToDoListsRepository;
