import ITodoListRepository from "@use_cases/repositories/ito-do-list-repository";
import ToDoList from "@entities/to-do-list";
import ToDo from "@entities/to-do";
import MemoryDB from "./index";

class MemoryDBRepositories implements ITodoListRepository {
  private memoryDB: MemoryDB;

  constructor(memoryDB: MemoryDB) {
    this.memoryDB = memoryDB;
  }

  public createToDo = (text: string, to_do_list_id: number): ToDo => {
    const toDos = this.memoryDB.getToDos();

    let id = -1;

    if (toDos.length == 0) {
      id = 1;
    } else {
      id = Number(toDos[toDos.length - 1].id) + 1;
    }

    const toDo: ToDo = {
      id,
      text: text,
      finished_at: null,
      to_do_list_id: to_do_list_id,
    };

    toDos.push(toDo);

    return toDo;
  };

  public getToDos = (toDoListId: number): ToDo[] => {
    const toDos = this.memoryDB.getToDos();

    const filteredToDos = toDos.filter((toDo: ToDo) => {
      return toDo.to_do_list_id == toDoListId;
    });

    return filteredToDos;
  };

  private getToDoById = (id: number): ToDo | null => {
    let targetToDo = null;

    this.memoryDB.getToDos().forEach((toDo: ToDo) => {
      if (toDo.id == id) {
        targetToDo = toDo;
      }
    });

    return targetToDo;
  };

  public getToDosByToDoListId = (toDoListId: number): ToDo[] => {
    const toDos = this.memoryDB.getToDos();

    const filteredToDos = toDos.filter((toDo: ToDo) => {
      return toDo.to_do_list_id == toDoListId;
    });

    return filteredToDos;
  };

  public updateToDo = (id: number, text: string): boolean => {
    const toDo = this.getToDoById(id);

    if (toDo) {
      toDo.text = text;
      return true;
    }

    return false;
  };

  public finishToDo = (id: number): boolean => {
    const toDo = this.getToDoById(id);

    if (toDo) {
      toDo.finished_at = Date.now();
      return true;
    }

    return false;
  };

  public unfinishToDo = (id: number): boolean => {
    const toDo = this.getToDoById(id);

    if (toDo) {
      toDo.finished_at = null;
      return true;
    }

    return false;
  };

  public deleteToDoById = (id: number): boolean => {
    const toDos = this.memoryDB.getToDos();

    const newToDos = toDos.filter((toDo: ToDo) => {
      return toDo.id != id;
    });

    this.memoryDB.setToDos(newToDos);

    return true;
  };

  public deleteToDosByToDoListId = (toDoListId: number): boolean => {
    const toDos = this.memoryDB.getToDos();

    const newToDos = toDos.filter((toDo: ToDo) => {
      return toDo.to_do_list_id != toDoListId;
    });

    this.memoryDB.setToDos(newToDos);

    return true;
  };

  public createToDoList = (): ToDoList => {
    const toDoList: ToDoList = {
      id: null,
    };

    const toDoLists = this.memoryDB.getToDoLists();

    if (toDoLists.length == 0) {
      toDoList.id = 1;
    } else {
      toDoList.id = Number(toDoLists[toDoLists.length - 1].id) + 1;
    }

    toDoLists.push(toDoList);

    return toDoList;
  };

  public getToDoLists = (): ToDoList[] => {
    return this.memoryDB.getToDoLists();
  };

  public deleteToDoListById = (id: number): boolean => {
    const toDoLists = this.memoryDB.getToDoLists();

    const newToDoLists = toDoLists.filter((toDoList: ToDoList) => {
      return toDoList.id != id;
    });

    this.deleteToDosByToDoListId(id);

    this.memoryDB.setToDoLists(newToDoLists);

    return true;
  };
}

export default MemoryDBRepositories;
