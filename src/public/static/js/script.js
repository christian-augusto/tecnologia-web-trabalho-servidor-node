document.addEventListener("DOMContentLoaded", async function () {
  const TO_DO_LIST_COOKIE_NAME = "to-do-list";

  const el = {
    toDoList: document.querySelector("#to-do-list"),
    createToDoForm: {
      self: document.querySelector("#to-do-create-form"),
      toDoTextInput: document.querySelector("#to-do-text-input"),
    },
  };

  function saveNewToDoList(toDoList) {
    Cookies.set(TO_DO_LIST_COOKIE_NAME, JSON.stringify(toDoList), {
      expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24), // 24 horas
    });
  }

  function updateToDos(toDos) {
    toDoListCache.toDos = toDos;

    let toDosHTML = "";

    toDoListCache.toDos.forEach(function (toDo) {
      let isDone = toDo.finished_at === null ? "" : ' checked="checked"';

      toDosHTML += `
        <li>
          <input type="checkbox" class="to-do-check-done-input"${isDone} />
          <p>${toDo.text}</p>
          <button type="button" class="to-do-remove-button">remover</button>
        </li>
      `;
    });

    el.toDoList.innerHTML = toDosHTML;

    const toDoItems = el.toDoList.querySelectorAll("li");

    for (let i = 0; i < toDoItems.length; i++) {
      toDoItems[i].querySelector(".to-do-check-done-input").onchange = function (ev) {
        if (ev.target.checked) {
          finishToDo(toDoListCache.toDos[i].id);
        } else {
          unfinishToDo(toDoListCache.toDos[i].id);
        }
      };

      toDoItems[i].querySelector(".to-do-remove-button").onclick = function () {
        deleteToDo(toDoListCache.toDos[i].id);
        initPage();
      };
    }
  }

  async function initPage() {
    el.createToDoForm.self.onsubmit = createToDoFormSubmit;

    let toDoList = Cookies.get(TO_DO_LIST_COOKIE_NAME);

    if (!toDoList) {
      toDoList = await createToDoList();

      saveNewToDoList(toDoList);
    } else {
      toDoList = JSON.parse(toDoList);
    }

    toDoListCache.toDoList = toDoList;

    loadToDos();
  }

  async function createToDoList() {
    try {
      const response = await fetch("/to-do-lists", {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
        }),
      });

      const responseBody = await response.json();

      return responseBody.toDoList;
    } catch (error) {
      return null;
    }
  }

  async function createToDo(text, toDoListId) {
    try {
      const response = await fetch("/to-dos", {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          text,
          to_do_list_id: toDoListId,
        }),
      });

      const responseBody = await response.json();

      return responseBody.toDo;
    } catch (error) {
      return null;
    }
  }

  async function createToDoFormSubmit(ev) {
    ev.preventDefault();

    await createToDo(el.createToDoForm.toDoTextInput.value, toDoListCache.toDoList.id);
    el.createToDoForm.toDoTextInput.value = "";
    loadToDos();
  }

  async function loadToDos() {
    const toDos = await listToDos();

    updateToDos(toDos);
  }

  async function listToDos() {
    try {
      const response = await fetch(`/to-dos?to_do_list_id=${toDoListCache.toDoList.id}`, {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
        }),
      });

      const responseBody = await response.json();

      return responseBody.to_dos;
    } catch (error) {
      return null;
    }
  }

  async function deleteToDo(toDoId) {
    try {
      await fetch(`/to-dos/${toDoId}`, {
        method: "DELETE",
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  async function finishToDo(toDoId) {
    try {
      await fetch(`/to-dos/${toDoId}/finish`, {
        method: "PUT",
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  async function unfinishToDo(toDoId) {
    try {
      await fetch(`/to-dos/${toDoId}/unfinish`, {
        method: "PUT",
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  const toDoListCache = {
    toDoList: null,
    toDos: null,
  };

  await initPage();
});
