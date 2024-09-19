// Configuración de SweetAlert2
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

// Datos iniciales para la lista de empleados
let employees = [
  { id: 1, nombre: 'Carlos Rodríguez', email: 'carlos@example.com', telefono: '123456789', rol: 'Manicurista' },
  { id: 2, nombre: 'Ana Gómez', email: 'ana@example.com', telefono: '987654321', rol: 'Estilista' },
];

// Función para renderizar la tabla de empleados
function renderTable() {
  const tbody = document.querySelector('#employeesTable tbody');
  tbody.innerHTML = ''; // Limpiar la tabla antes de renderizar
  employees.forEach((employee, index) => {
    const row = `
      <tr>
        <td>${employee.id}</td>
        <td>${employee.nombre}</td>
        <td>${employee.email}</td>
        <td>${employee.telefono}</td>
        <td>${employee.rol}</td>
        <td class="actions-btn">
          <button class="btn btn-warning btn-sm edit-btn" data-index="${index}"><i class="fa fa-pencil"></i></button>
          <button class="btn btn-danger btn-sm delete-btn" data-index="${index}"><i class="fa fa-trash"></i></button>
          <button class="btn btn-info btn-sm status-btn"><i class="fa fa-toggle-on"></i></button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  // Asignar eventos a los botones de eliminar
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function () {
      const index = this.getAttribute('data-index');

      // Mostrar alerta de confirmación antes de eliminar
      swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminarlo",
        cancelButtonText: "No, cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // Eliminar empleado
          employees.splice(index, 1);

          // Renderizar la tabla nuevamente con los cambios
          renderTable();

          swalWithBootstrapButtons.fire({
            title: "¡Eliminado!",
            text: "El empleado ha sido eliminado.",
            icon: "success"
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "El empleado no ha sido eliminado.",
            icon: "error"
          });
        }
      });
    });
  });

  // Asignar eventos a los botones de editar
  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', function () {
      const index = this.getAttribute('data-index');
      const employee = employees[index];

      // Mostrar alerta de confirmación antes de editar
      swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas editar este empleado?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Sí, editar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // Rellenar el formulario de edición con los datos del empleado
          document.getElementById('employeeName').value = employee.nombre;
          document.getElementById('employeeEmail').value = employee.email;
          document.getElementById('employeePhone').value = employee.telefono;
          document.getElementById('employeeRole').value = employee.rol;

          // Almacenar el índice del empleado para la edición
          document.getElementById('employeeForm').dataset.index = index;

          // Abrir el modal de edición
          modal.style.display = 'block';
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "No se ha realizado ninguna edición.",
            icon: "error"
          });
        }
      });
    });
  });
}

// Captura el formulario y agrega un nuevo empleado o lo edita
document.getElementById('employeeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const index = this.dataset.index;  // Ver si estamos editando

  const employeeName = document.getElementById('employeeName').value;
  const employeeEmail = document.getElementById('employeeEmail').value;
  const employeePhone = document.getElementById('employeePhone').value;
  const employeeRole = document.getElementById('employeeRole').value;

  if (index) {
    // Editar empleado existente
    employees[index] = {
      ...employees[index],
      nombre: employeeName,
      email: employeeEmail,
      telefono: employeePhone,
      rol: employeeRole,
    };

    swalWithBootstrapButtons.fire({
      title: "¡Editado!",
      text: "El empleado ha sido actualizado con éxito.",
      icon: "success"
    });
  } else {
    // Crear un nuevo empleado
    const newId = employees.length + 1; // Generar nuevo ID
    employees.push({
      id: newId,
      nombre: employeeName,
      email: employeeEmail,
      telefono: employeePhone,
      rol: employeeRole,
    });

    swalWithBootstrapButtons.fire({
      title: "¡Creado!",
      text: "El nuevo empleado ha sido agregado.",
      icon: "success"
    });
  }

  // Renderizar la tabla nuevamente con los cambios
  renderTable();

  // Cerrar el modal
  modal.style.display = 'none';

  // Limpiar el formulario
  document.getElementById('employeeForm').reset();
  delete this.dataset.index;
});

// Funcionalidad para abrir y cerrar el modal
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
  modal.style.display = 'block';
};

closeModalBtn.onclick = function() {
  modal.style.display = 'none';
};

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Inicializar la tabla con los datos iniciales
renderTable();
