const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector("footer button");

inputBox.onkeyup = () => {
  refreshAddButtonState();
};
showTasks();

//zareagowanie na kliknięcie w przycisk dodający zadanie
addBtn.onclick = () => {
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    //jeśli local storage jest puste
    listArr = []; //tworzy pustą tablicę
  } else {
    listArr = JSON.parse(getLocalStorage); //zmiana json a na obiekt js
  }
  listArr.push(userData); //dodawanie danych do tablic listArr
  //zapisanie do local storage tablicy listArr pary klucz - wartość, strzmiana obiektu json na string
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks(); //wywołanie funkcji showTasks
};

//funkcja aktywująca przycisk dodawania zadania
function refreshAddButtonState() {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    //jeśli pole inputa nie jest puste
    addBtn.classList.add("active"); //aktywuje przycisk
  } else {
    addBtn.classList.remove("active");
  }
}

//funkcja dodająca zadania do listy wewnątrz ul
function showTasks() {
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  let newLiTag = "";
  listArr.forEach((element, index) => {
    newLiTag += `<li> ${element} <Button onclick='deleteTask(${index})'>Done</Button></li>`;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = ""; //czyszczenie inputa
  refreshAddButtonState();
}

//funkcja usuwająca pojedyńcze zadanie
function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("New Todo");
  listArr = JSON.parse(getLocalStorage);
  listArr.splice(index, 1);
  //po usunięciu li akutalizuje localstorage
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
}

//funkcja usuwająca wszystkie zadania
deleteAllBtn.onclick = () => {
  listArr = [];
  //po usunięciu wszystkich zadań zaktualizuje local storage
  localStorage.setItem("New Todo", JSON.stringify(listArr));
  showTasks();
};
