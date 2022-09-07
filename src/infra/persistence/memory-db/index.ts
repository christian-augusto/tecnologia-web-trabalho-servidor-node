import ToDoList from "@entities/to-do-list";
import ToDo from "@entities/to-do";

class MemoryDB {
  private toDoLists: Array<ToDoList>;
  private toDos: Array<ToDo>;

  constructor() {
    this.toDoLists = [];
    this.toDos = [];
  }

  getToDoLists(): Array<ToDoList> {
    return this.toDoLists;
  }

  getToDos(): Array<ToDo> {
    return this.toDos;
  }
}

export default MemoryDB;
