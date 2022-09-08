import ITodoListRepository from "@usecases/repositories/ito-do-list-repository";
import ToDoList from "@entities/to-do-list";
import ToDo from "@entities/to-do";
import MemoryDB from "./index";

class MemoryDBRepositories implements ITodoListRepository {
  private memoryDB: MemoryDB;

  constructor(memoryDB: MemoryDB) {
    this.memoryDB = memoryDB;
  }

  public createToDo(text: string, to_do_list_id: number): ToDo {
    const toDo: ToDo = {
      id: null,
      text: text,
      finished_at: null,
      to_do_list_id: to_do_list_id,
    };

    const toDos = this.memoryDB.getToDos();

    if (toDos.length == 0) {
      toDo.id = 1;
    } else {
      toDo.id = Number(toDos[toDos.length - 1].id) + 1;
    }

    toDos.push(toDo);

    return toDo;
  }

  public getToDos(): Array<ToDo> {
    return this.memoryDB.getToDos();
  }

  private getToDoById(id: number): ToDo | null {
    let targetToDo = null;

    this.memoryDB.getToDos().forEach(function (toDo: ToDo) {
      if (toDo.id == id) {
        targetToDo = toDo;
      }
    });

    return targetToDo;
  }

  public getToDosByToDoListId(toDoListId: number): Array<ToDo> {
    const toDos = this.memoryDB.getToDos();

    const filteredToDos = toDos.filter(function (toDo: ToDo) {
      return toDo.to_do_list_id == toDoListId;
    });

    return filteredToDos;
  }

  public updateToDoText(id: number, text: string): boolean {
    const toDos = this.memoryDB.getToDos();

    toDos[id].text = text;

    return true;
  }

  public finishToDo(id: number): boolean {
    const toDo = this.getToDoById(id);

    if (toDo) {
      toDo.finished_at = Date.now();
      return true;
    }

    return false;
  }

  public unfinishToDo(id: number): boolean {
    const toDo = this.getToDoById(id);

    if (toDo) {
      toDo.finished_at = null;
      return true;
    }

    return false;
  }

  public deleteToDoById(id: number): boolean {
    const toDos = this.memoryDB.getToDos();

    const newToDos = toDos.filter(function (toDo: ToDo) {
      return toDo.id != id;
    });

    this.memoryDB.setToDos(newToDos);

    return true;
  }

  public deleteToDosByToDoListId(toDoListId: number): boolean {
    const toDos = this.memoryDB.getToDos();

    const newToDos = toDos.filter(function (toDo: ToDo) {
      return toDo.to_do_list_id != toDoListId;
    });

    this.memoryDB.setToDos(newToDos);

    return true;
  }

  public createToDoList(): ToDoList {
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
  }

  public getToDoLists(): Array<ToDoList> {
    return this.memoryDB.getToDoLists();
  }

  public deleteToDoListById(id: number): boolean {
    const toDoLists = this.memoryDB.getToDoLists();

    const newToDoLists = toDoLists.filter(function (toDoList: ToDoList) {
      return toDoList.id != id;
    });

    this.deleteToDosByToDoListId(id);

    this.memoryDB.setToDoLists(newToDoLists);

    return true;
  }
}

export default MemoryDBRepositories;
