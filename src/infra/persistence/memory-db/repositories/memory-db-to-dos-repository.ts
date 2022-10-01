import IToDosRepository from "@use_cases/repositories/ito-dos-repository";
import ToDo from "@entities/to-do";
import MemoryDb from "@infra/persistence/memory-db";

class MemoryDbToDosRepository implements IToDosRepository {
  private memoryDb: MemoryDb;

  constructor(memoryDb: MemoryDb) {
    this.memoryDb = memoryDb;
  }

  public createToDo = (text: string, to_do_list_id: number): ToDo => {
    const toDos = this.memoryDb.getToDos();

    let id = -1;

    if (toDos.length == 0) {
      id = 1;
    } else {
      id = Number(toDos[toDos.length - 1].id) + 1;
    }

    const toDo: ToDo = {
      id,
      text: text,
      finished_at: null,
      to_do_list_id: to_do_list_id,
    };

    toDos.push(toDo);

    return toDo;
  };

  public getToDos = (toDoListId: number): ToDo[] => {
    const toDos = this.memoryDb.getToDos();

    const filteredToDos = toDos.filter((toDo: ToDo) => {
      return toDo.to_do_list_id == toDoListId;
    });

    return filteredToDos;
  };

  private getToDoById = (id: number): ToDo | null => {
    let targetToDo = null;

    this.memoryDb.getToDos().forEach((toDo: ToDo) => {
      if (toDo.id == id) {
        targetToDo = toDo;
      }
    });

    return targetToDo;
  };

  public getToDosByToDoListId = (toDoListId: number): ToDo[] => {
    const toDos = this.memoryDb.getToDos();

    const filteredToDos = toDos.filter((toDo: ToDo) => {
      return toDo.to_do_list_id == toDoListId;
    });

    return filteredToDos;
  };

  public updateToDo = (id: number, text: string): boolean => {
    const toDo = this.getToDoById(id);

    if (toDo) {
      toDo.text = text;
      return true;
    }

    return false;
  };

  public finishToDo = (id: number): boolean => {
    const toDo = this.getToDoById(id);

    if (toDo) {
      toDo.finished_at = Date.now();
      return true;
    }

    return false;
  };

  public unfinishToDo = (id: number): boolean => {
    const toDo = this.getToDoById(id);

    if (toDo) {
      toDo.finished_at = null;
      return true;
    }

    return false;
  };

  public deleteToDoById = (id: number): boolean => {
    const toDos = this.memoryDb.getToDos();

    const newToDos = toDos.filter((toDo: ToDo) => {
      return toDo.id != id;
    });

    this.memoryDb.setToDos(newToDos);

    return true;
  };
}

export default MemoryDbToDosRepository;
