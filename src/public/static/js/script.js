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
          <p class="to-do-text">${toDo.text}</p>
          <button type="button" class="to-do-edit-button">editar</button>
          <button type="button" class="to-do-remove-button">remover</button>
          <input type="text" class="to-do-edit-text-input is--hidden" />
          <button type="button" class="to-do-edit-save-button is--hidden">salvar</button>
          <button type="button" class="to-do-edit-cancel-button is--hidden">cancelar</button>
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
        loadToDos();
      };

      toDoItems[i].querySelector(".to-do-edit-button").onclick = function () {
        toDoItems[i].querySelector(".to-do-check-done-input").classList.add("is--hidden");
        toDoItems[i].querySelector(".to-do-text").classList.add("is--hidden");
        toDoItems[i].querySelector(".to-do-edit-button").classList.add("is--hidden");
        toDoItems[i].querySelector(".to-do-remove-button").classList.add("is--hidden");

        toDoItems[i].querySelector(".to-do-edit-text-input").classList.remove("is--hidden");
        toDoItems[i].querySelector(".to-do-edit-save-button").classList.remove("is--hidden");
        toDoItems[i].querySelector(".to-do-edit-cancel-button").classList.remove("is--hidden");

        toDoItems[i].querySelector(".to-do-edit-text-input").value = toDoListCache.toDos[i].text;
      };

      toDoItems[i].querySelector(".to-do-edit-cancel-button").onclick = closeEditToDo.bind(null, toDoItems[i]);

      toDoItems[i].querySelector(".to-do-edit-save-button").onclick = async function () {
        closeEditToDo(toDoItems[i]);
        await updateToDo(toDoListCache.toDos[i].id, toDoItems[i].querySelector(".to-do-edit-text-input").value);
        loadToDos();
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

  async function updateToDo(toDoId, text) {
    try {
      await fetch(`/to-dos/${toDoId}`, {
        method: "PUT",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          text,
        }),
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  function closeEditToDo(toDoItem) {
    toDoItem.querySelector(".to-do-check-done-input").classList.remove("is--hidden");
    toDoItem.querySelector(".to-do-text").classList.remove("is--hidden");
    toDoItem.querySelector(".to-do-edit-button").classList.remove("is--hidden");
    toDoItem.querySelector(".to-do-remove-button").classList.remove("is--hidden");

    toDoItem.querySelector(".to-do-edit-text-input").classList.add("is--hidden");
    toDoItem.querySelector(".to-do-edit-save-button").classList.add("is--hidden");
    toDoItem.querySelector(".to-do-edit-cancel-button").classList.add("is--hidden");
  }

  const toDoListCache = {
    toDoList: null,
    toDos: null,
  };

  await initPage();
});
