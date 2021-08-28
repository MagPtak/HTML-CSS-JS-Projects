const inputBox = document.querySelector('.inputField input')
const addBtn = document.querySelector('.inputField button')

inputBox.onkeyup = () => {
    let userData = inputBox.value
    if(userData.trim() != 0){ //jeśli do inputa nie jest puste
        addBtn.classList.add('active') //aktywuje przycisk
    } else {
        addBtn.classList.remove('active') //jeśli puste pola przycisk nieaktywny
    }
}


// kliknięcie w przycisk
addBtn.onclick = () => {
    let userData = inputBox.value
    let getLocalStorage = localStorage.getItem('New Todo')
    if(getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage) //zmiana json a na obiekt js
    }
    listArr.push(userData) //dodawanie danych do tablic listArr
    localStorage.setItem('New Todo', JSON.stringify(listArr)) //zmiana obiektu js na json string

}