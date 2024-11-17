const tareas = [
  { descripcion: "Hacer aseo", completada: false },
  { descripcion: "Cortar el pasto", completada: false },
  { descripcion: "Hacer galletas", completada: false },
];

const tareaInput = document.getElementById('tarea-input');
const btnAgregar = document.getElementById('agregar');
const listaDeTarea = document.getElementById('lista-tarea');
const tareaTotal = document.getElementById('total1');
const tareaCompletada = document.getElementById('completada1');

function contador() {
  const total = tareas.length;
  const completada = tareas.filter(tarea => tarea.completada).length;
  tareaTotal.textContent = total;
  tareaCompletada.textContent = completada;
}

function renderizar() {
  listaDeTarea.innerHTML = ''; 
  tareas.forEach((tarea, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
          ${tarea.completada ? `<s>${tarea.descripcion}</s>` : tarea.descripcion}
          <button onclick="realizada(${index})">Cambiar</button>
          <button onclick="eliminar(${index})">Eliminar</button>
      `;
      listaDeTarea.appendChild(li); 
  });
  contador(); 
}

function agregarTarea() {
  const descripcion = tareaInput.value.trim();
  if (descripcion) { 
      tareas.push({ descripcion, completada: false }); 
      tareaInput.value = ''; 
      renderizar(); 
  }
}

function eliminar(index) {
  if (index !== -1) {
      tareas.splice(index, 1); 
      renderizar(); 
  }
}

function realizada(index) {
  const tareaEncontrada = tareas[index]; 
  if (tareaEncontrada) {
      tareaEncontrada.completada = !tareaEncontrada.completada; 
      renderizar(); 
  }
}

renderizar();

btnAgregar.addEventListener('click', agregarTarea);