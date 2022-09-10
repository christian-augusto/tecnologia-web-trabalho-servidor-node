import ToDoList from "@entities/to-do-list";
import ToDo from "@entities/to-do";

interface ITodoListRepository {
  createToDo(text: string, to_do_list_id: number): ToDo;
  getToDos(toDoListId: number): Array<ToDo>;
  getToDosByToDoListId(toDoListId: number): Array<ToDo>;
  deleteToDoById(id: number): boolean;
  updateToDoText(id: number, text: string): boolean;
  finishToDo(id: number): boolean;
  unfinishToDo(id: number): boolean;
  createToDoList(): ToDoList;
  getToDoLists(): Array<ToDoList>;
  deleteToDoListById(id: number): boolean;
}

export default ITodoListRepository;
