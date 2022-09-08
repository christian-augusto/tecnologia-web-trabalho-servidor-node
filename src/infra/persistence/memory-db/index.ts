import ToDoList from "@entities/to-do-list";
import ToDo from "@entities/to-do";

class MemoryDB {
  private toDoLists: Array<ToDoList>;
  private toDos: Array<ToDo>;

  constructor() {
    this.toDoLists = [];
    this.toDos = [];
  }

  setToDoLists(toDoLists: Array<ToDoList>): void {
    this.toDoLists = toDoLists;
  }

  getToDoLists(): Array<ToDoList> {
    return this.toDoLists;
  }

  setToDos(toDos: Array<ToDo>): void {
    this.toDos = toDos;
  }

  getToDos(): Array<ToDo> {
    return this.toDos;
  }
}

export default MemoryDB;
