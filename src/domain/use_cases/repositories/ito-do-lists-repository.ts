import ToDoList from "@entities/to-do-list";

interface IToDoListsRepository {
  createToDoList(): ToDoList;
  getToDoLists(): ToDoList[];
  deleteToDoListById(id: number): boolean;
}

export default IToDoListsRepository;
