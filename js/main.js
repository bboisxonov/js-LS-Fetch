// LOCAL STORAGE

// let elForm = document.querySelector('.form'),
//     elFormInput = document.querySelector('.form-input'),
//     elHistorySearch = document.querySelector('.history-search');

// let historyInfo = []

// let guy = {
//     age: 14,
//     name: "toybola",
//     hobby: null
// }

// elForm.addEventListener('submit', (evt) => {
//     evt.preventDefault()
//     let inputValue = elFormInput.value
//     guy.hobby = inputValue
//     window.localStorage.setItem("inputValue", JSON.stringify(guy))
//     console.log(JSON.parse(window.localStorage.getItem('inputValue', guy)));

// })


// FETCH

// const elUserList = document.querySelector('.user-list')

// console.log(elUserList);

// (async function () {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((data) => renderingUsers(data))
// })()

// function renderingUsers(array) {
//     array.forEach(user => {
//         const newLi = document.createElement('li')
//         newLi.textContent = user.username

//         elUserList.appendChild(newLi)
//     });

//     console.log(elUserList);

// }

