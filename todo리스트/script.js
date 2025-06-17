const addBtn = document.getElementById('addBtn')
const todoInput = document.getElementById('todoInput')
const todolist = document.getElementById('todolist')

addBtn.addEventListener('click', () => {
    const inputText = todoInput.value.trim();
    if (inputText === ``) {
        return;
    }

    const li = document.createElement(`li`);


    li.innerHTML = `
    ${inputText}
    <button class="deleteBtn">삭제</button>
    `
    todolist.appendChild(li);

    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
    });

    todoInput.value = '';
});



