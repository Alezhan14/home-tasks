let btnSendEl = document.querySelector('.btn-send');
let btnDeleteEl = document.querySelector('.btn-delete');
let btnEditeEl = document.querySelector('.btn-edit');
let btnReadEl = document.querySelector('.btn-read');
let deleteCounter = 1;
let editCounter = 1;


btnSendEl.addEventListener('click', event => {
    event.preventDefault();
    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userId": 1,
            "title": "New todo",
            "completed": false
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
});

btnDeleteEl.addEventListener('click', event => {
    event.preventDefault();

    fetch(`http://localhost:3000/todos/${deleteCounter}`)
        .then(res => res.json())
        .then(data => console.log(data))
        deleteCounter++
});

btnEditeEl.addEventListener('click', event => {
    event.preventDefault();

    fetch(`http://localhost:3000/todos/${editCounter}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userId": 1,
            "title": "Updated todo",
            "completed": true
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
    editCounter++;
})

btnReadEl.addEventListener('click', event => {
    event.preventDefault();
    fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(data => console.log(data))
})