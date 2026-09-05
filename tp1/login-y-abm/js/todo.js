const inputBox = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-btn');
const progressFill = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');
const emptyState = document.getElementById('empty-state');

const DELETE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 6 6 18"/>
  <path d="m6 6 12 12"/>
</svg>`;

// persistencia
function saveData() {
    localStorage.setItem('todo-data', listContainer.innerHTML);
}

function showTask() {
    const saved = localStorage.getItem('todo-data');
    if (saved) {
        listContainer.innerHTML = saved;
    }
    updateUI();
}

// agregar tarea
function addTask() {
    const text = inputBox.value.trim();
    if (!text) {
        const row = inputBox.closest('.todo-input-row');
        row.classList.add('shake');
        setTimeout(() => row.classList.remove('shake'), 400);
        inputBox.focus();
        alert('Por favor ingresá una tarea antes de agregar.');
        return;
    }

    const li = document.createElement('li');

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
    updateUI();
}

// delegación de eventos en la lista
listContainer.addEventListener('click', function (e) {
    const target = e.target;

    // click en el botón de borrar
    const delBtn = target.closest('.delete-btn');
    if (delBtn) {
        const li = delBtn.parentElement;
        li.style.transform = 'translateX(30px)';
        li.style.opacity = '0';
        li.style.transition = 'all 0.22s ease';
        setTimeout(() => {
            li.remove();
            saveData();
            updateUI();
        }, 220);
        return;
    }

    // marcar como completada
    const li = target.closest('li');
    if (li && li.tagName === 'LI') {
        li.classList.toggle('checked');
        saveData();
        updateUI();
    }
});

// agregar tarea con boton y tecla Enter
addBtn.addEventListener('click', addTask);
inputBox.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });

// barra de progreso y estado vacío
function updateUI() {
    const items = listContainer.querySelectorAll('li');
    const total = items.length;
    const done = listContainer.querySelectorAll('li.checked').length;
    const pct = total === 0 ? 0 : Math.round((done / total) * 100);

    progressFill.style.width = pct + '%';

    if (total === 0) {
        progressLabel.innerHTML = '<span>Sin tareas</span><span class="count-done">—</span>';
    } else {
        progressLabel.innerHTML =
            `<span>${done} de ${total} completadas</span>` +
            `<span class="count-done">${pct}%</span>`;
    }

    emptyState.style.display = total === 0 ? 'flex' : 'none';
    emptyState.setAttribute('aria-hidden', total !== 0);
    clearBtn.disabled = done === 0;
}

// eliminar tareas completadas
clearBtn.addEventListener('click', () => {
    listContainer.querySelectorAll('li.checked').forEach(li => li.remove());
    saveData();
    updateUI();
});

// inicio
showTask();
inputBox.focus();
