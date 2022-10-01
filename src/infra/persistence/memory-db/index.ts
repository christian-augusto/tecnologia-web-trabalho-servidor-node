import ToDoList from "@entities/to-do-list";
import ToDo from "@entities/to-do";

class MemoryDB {
  private toDoLists: ToDoList[];
  private toDos: ToDo[];

  constructor() {
    this.toDoLists = [];
    this.toDos = [];
  }

  setToDoLists(toDoLists: ToDoList[]): void {
    this.toDoLists = toDoLists;
  }

  getToDoLists(): ToDoList[] {
    return this.toDoLists;
  }

  setToDos(toDos: ToDo[]): void {
    this.toDos = toDos;
  }

  getToDos(): ToDo[] {
    return this.toDos;
  }
}

export default MemoryDB;
