import ToDoList from "@entities/to-do-list";
import ToDo from "@entities/to-do";

class MemoryDb {
  private toDoLists: ToDoList[];
  private toDos: ToDo[];

  constructor() {
    this.toDoLists = [];
    this.toDos = [];
  }

  public getToDoLists = (): ToDoList[] => {
    return this.toDoLists;
  };

  public setToDoLists = (toDoLists: ToDoList[]): void => {
    this.toDoLists = toDoLists;
  };

  public getToDos = (): ToDo[] => {
    return this.toDos;
  };

  public setToDos = (toDos: ToDo[]): void => {
    this.toDos = toDos;
  };
}

export default MemoryDb;
