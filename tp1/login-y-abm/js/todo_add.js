const inputBox = document.getElementById('todo-input');
const addBtn   = document.getElementById('add-btn');
const listContainer = document.getElementById('todo-list');
const emptyState    = document.getElementById('empty-state');

const STORAGE_KEY = 'todo-data-1';

const DELETE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 6 6 18"/>
  <path d="m6 6 12 12"/>
</svg>`;

function saveData() {
    localStorage.setItem(STORAGE_KEY, listContainer.innerHTML);
}

function updateEmpty() {
    const total = listContainer.querySelectorAll('li').length;
    emptyState.style.display = total === 0 ? 'flex' : 'none';
    emptyState.setAttribute('aria-hidden', total !== 0);
}

function loadTasks() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) listContainer.innerHTML = saved;
    updateEmpty();
}

function addTask() {
    const text = inputBox.value.trim();
    if (!text) {
        const row = inputBox.closest('.todo-input-row');
        row.classList.add('shake');
        setTimeout(() => row.classList.remove('shake'), 400);
        inputBox.focus();
        alert('Por favor ingresa una tarea antes de agregar.');
        return;
    }

    const li = document.createElement('li');
    li.style.cursor = 'default';

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = text;

    const delSpan = document.createElement('span');
    delSpan.className = 'delete-btn';
    delSpan.innerHTML = DELETE_SVG;
    delSpan.title = 'Eliminar tarea';
    delSpan.setAttribute('aria-label', 'Eliminar tarea');

    li.appendChild(textSpan);
    li.appendChild(delSpan);

    listContainer.insertBefore(li, listContainer.firstChild);

    inputBox.value = '';
    inputBox.focus();

    saveData();
    updateEmpty();
}

// Eliminar tarea (sin marcar como completada)
listContainer.addEventListener('click', function (e) {
    const delBtn = e.target.closest('.delete-btn');
    if (delBtn) {
        const li = delBtn.parentElement;
        li.style.transform = 'translateX(30px)';
        li.style.opacity = '0';
        li.style.transition = 'all 0.22s ease';
        setTimeout(() => {
            li.remove();
            saveData();
            updateEmpty();
        }, 220);
    }
});

addBtn.addEventListener('click', addTask);
inputBox.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });

loadTasks();
inputBox.focus();
