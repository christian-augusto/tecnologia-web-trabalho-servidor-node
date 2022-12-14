import ToDo from "@entities/to-do";

interface IToDosRepository {
  createToDo(text: string, to_do_list_id: number): ToDo;
  getToDos(toDoListId: number): ToDo[];
  getToDosByToDoListId(toDoListId: number): ToDo[];
  deleteToDoById(id: number): boolean;
  updateToDo(id: number, text: string): boolean;
  finishToDo(id: number): boolean;
  unfinishToDo(id: number): boolean;
}

export default IToDosRepository;
