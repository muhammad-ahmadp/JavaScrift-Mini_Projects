const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');


addBtn.addEventListener('click', addTask);
clearBtn.addEventListener('click', clearTask);


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a Task');
        return;
    }
    if (taskList.children.length >= 8) {
        alert('Limit reached MAX tasks are 8');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}

function clearTask() {
    taskList.innerHTML = '';
}


