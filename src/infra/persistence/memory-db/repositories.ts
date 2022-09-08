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

    toDo.id = toDos.length;

    toDos.push(toDo);

    return toDo;
  }

  public getToDos(): Array<ToDo> {
    return this.memoryDB.getToDos();
  }

  public getToDoById(id: number): ToDo {
    return this.memoryDB.getToDos()[id];
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
    const toDos = this.memoryDB.getToDos();

    toDos[id].finished_at = Date.now();

    return true;
  }

  public unfinishToDo(id: number): boolean {
    const toDos = this.memoryDB.getToDos();

    toDos[id].finished_at = null;

    return true;
  }

  public deleteToDoById(id: number): boolean {
    const toDos = this.memoryDB.getToDos();

    const newToDos = toDos.filter(function (toDo: ToDo, index: number) {
      return index != id;
    });

    this.memoryDB.setToDos(newToDos);

    return true;
  }

  public createToDoList(): ToDoList {
    const toDoList: ToDoList = {
      id: null,
    };

    const toDoLists = this.memoryDB.getToDoLists();

    toDoList.id = toDoLists.length;

    toDoLists.push(toDoList);

    return toDoList;
  }

  public getToDoLists(): Array<ToDoList> {
    return this.memoryDB.getToDoLists();
  }

  public getToDoListById(id: number): ToDoList {
    return this.memoryDB.getToDoLists()[id];
  }

  public deleteToDoListById(id: number): boolean {
    const toDoLists = this.memoryDB.getToDoLists();

    const newToDoLists = toDoLists.filter(function (toDoList: ToDoList, index: number) {
      return index != id;
    });

    this.memoryDB.setToDoLists(newToDoLists);

    return true;
  }
}

export default MemoryDBRepositories;
