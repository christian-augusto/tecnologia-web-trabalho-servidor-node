import ToDoList from "@entities/to-do-list";
import ToDo from "@entities/to-do";
import MemoryDB from "./index";

class MemoryDBRepositories {
  private memoryDB: MemoryDB;

  constructor(memoryDB: MemoryDB) {
    this.memoryDB = memoryDB;
  }

  public saveToDo(toDo: ToDo) {
    const toDos = this.memoryDB.getToDos();

    toDo.id = toDos.length;

    toDos.push(toDo);
  }

  public getToDoById(id: number): ToDo {
    return this.memoryDB.getToDos()[id];
  }

  public deleteToDoById(id: number): boolean {
    const toDos = this.memoryDB.getToDos();
    const newToDos: Array<ToDo> = [];

    toDos.forEach(function (toDo: ToDo, index: number) {
      if (index == id) {
        return;
      }

      newToDos.push(toDo);
    });

    return true;
  }

  public updateToDoText(id: number, text: string) {
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

  public saveToDoList(toDoList: ToDoList) {
    const toDoLists = this.memoryDB.getToDoLists();

    toDoList.id = toDoLists.length;

    toDoLists.push(toDoList);
  }

  public getToDoListById(id: number): ToDoList {
    return this.memoryDB.getToDoLists()[id];
  }

  public deleteToDoListById(id: number): boolean {
    const toDoLists = this.memoryDB.getToDoLists();
    const newToDoLists: Array<ToDoList> = [];

    toDoLists.forEach(function (toDoList: ToDoList, index: number) {
      if (index == id) {
        return;
      }

      newToDoLists.push(toDoList);
    });

    return true;
  }
}

export default MemoryDBRepositories;
