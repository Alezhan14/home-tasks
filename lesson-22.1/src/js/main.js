import "../scss/main.scss";

let formEl = document.querySelector('.js--form');
let toDoList = document.querySelector('.js--todos-wrapper');
let toDo = JSON.parse(localStorage.getItem('toDo')) || [];
let isChecked = false;

showToDoList();

let checkboxEl = document.querySelectorAll('input[type="checkbox"]');

function showToDoList() {
    for(let i = 0; i < toDo.length; i++) {
        let liChecked = toDo[i].isChecked;

        createItem(toDo[i].toDoText,liChecked)
    }

}

function getCurrentToDo(event) {
    return event.target.parentElement.querySelector('.todo-item__description').innerText;
}

function removeToDo(event) {
    let targetParentEl = event.target.parentElement;

    toDo = toDo.filter((element) => {
        if(element.toDoText !== getCurrentToDo(event)) {
            return element.toDoText;
        }
    });

    targetParentEl.remove();

    localStorage.setItem('toDo', JSON.stringify(toDo));
}

function createItem(text, isChecked) {
    let liEl = document.createElement('li');

    liEl.innerHTML = `<input type="checkbox"><span class="todo-item__description">${text}</span><button onclick="removeToDo(event)" class="todo-item__delete">Видалити</button>`;
    toDoList.appendChild(liEl).setAttribute('class', 'todo-item');

    if(isChecked) {
        liEl.children[0].checked = true;
        liEl.style.textDecoration = 'line-through';
    }
}

formEl.addEventListener('submit', function(event) {
    let toDoText = document.querySelector('.js--form__input').value;

    createItem(toDoText);
    toDo.push({toDoText, isChecked});

    localStorage.setItem('toDo', JSON.stringify(toDo));
})

checkboxEl.forEach((element) => {
    element.addEventListener('change', function(event) {
        toDo.find((element) => {
            if(element.toDoText === getCurrentToDo(event)) {
                element.isChecked = event.target.checked;
            }
        });

        let targetParentEl = event.target.parentElement;
        targetParentEl.style.textDecoration = event.target.checked ? 'line-through' : 'none';

        localStorage.setItem('toDo', JSON.stringify(toDo));
    })
});