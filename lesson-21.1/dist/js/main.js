"use strict";

let $formEl = $('.js--form');
let $toDoList = $('.js--todos-wrapper');
let toDo = JSON.parse(localStorage.getItem('toDo')) || [];
let isChecked = false;
showToDoList();
modal();
function showToDoList() {
  toDo.forEach(item => {
    createItem(item.toDoText, item.isChecked);
  });
}
function getCurrentToDo(event) {
  return $(event.target).siblings('.todo-item__description').text();
}
function removeToDo(event) {
  let $targetParentEl = $(event.target).parent();
  toDo = toDo.filter(element => element.toDoText !== getCurrentToDo(event));
  $targetParentEl.remove();
  localStorage.setItem('toDo', JSON.stringify(toDo));
}
function createItem(text, isChecked) {
  let $liEl = $("\n        <li class=\"todo-item\">\n            <input type=\"checkbox\">\n            <span class=\"todo-item__description\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">".concat(text, "</span>\n            <button class=\"todo-item__delete\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n        </li>\n    "));
  if (isChecked) {
    $liEl.find('input[type="checkbox"]').prop('checked', true);
    $liEl.css('text-decoration', 'line-through');
  }
  $liEl.find('.todo-item__delete').on('click', removeToDo);
  $liEl.find('input[type="checkbox"]').on('change', function (event) {
    let $targetParentEl = $(event.target).parent();
    let isChecked = $(event.target).is(':checked');
    toDo.find(element => {
      if (element.toDoText === getCurrentToDo(event)) {
        element.isChecked = isChecked;
      }
    });
    $targetParentEl.css('text-decoration', isChecked ? 'line-through' : 'none');
    localStorage.setItem('toDo', JSON.stringify(toDo));
  });
  $toDoList.append($liEl);
}
$formEl.on('submit', function (event) {
  event.preventDefault();
  let toDoText = $('.js--form__input').val();
  createItem(toDoText);
  toDo.push({
    toDoText,
    isChecked
  });
  localStorage.setItem('toDo', JSON.stringify(toDo));
});
function modal() {
  const $exampleModal = $('#exampleModal');
  if ($exampleModal.length) {
    $exampleModal.on('show.bs.modal', function (event) {
      const $modalTitle = $exampleModal.find('.modal-title');
      let itemDescription = $(event.relatedTarget).text();
      $modalTitle.text(itemDescription);
    });
  }
}