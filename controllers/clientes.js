// Configuración de SweetAlert2
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

let clients = [];

// Función para renderizar la tabla de clientes
function renderTable() {
  const tbody = document.querySelector('#clientsTable tbody');
  tbody.innerHTML = '';
  clients.forEach((client, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.phone}</td>
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
          // Eliminar el cliente
          clients.splice(index, 1);

          // Renderizar la tabla nuevamente con los cambios
          renderTable();

          swalWithBootstrapButtons.fire({
            title: "¡Eliminado!",
            text: "El cliente ha sido eliminado.",
            icon: "success"
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "El cliente no ha sido eliminado.",
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
      const client = clients[index];

      // Mostrar alerta de confirmación antes de editar
      swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas editar este cliente?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Sí, editar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // Rellenar el formulario de edición con los datos del cliente
          document.getElementById('editClientName').value = client.name;
          document.getElementById('editClientEmail').value = client.email;
          document.getElementById('editClientPhone').value = client.phone;

          // Almacenar el índice del cliente para la edición
          document.getElementById('editClientForm').dataset.index = index;

          // Abrir el modal de edición
          editModal.style.display = 'block';
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

// Captura el formulario y agrega un nuevo cliente
document.getElementById('clientForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const clientName = document.getElementById('clientName').value;
  const clientEmail = document.getElementById('clientEmail').value;
  const clientPhone = document.getElementById('clientPhone').value;

  // Agregar el nuevo cliente a la lista
  clients.push({
    name: clientName,
    email: clientEmail,
    phone: clientPhone
  });

  // Renderizar la tabla nuevamente con los nuevos datos
  renderTable();

  // Cerrar el modal de agregar
  document.getElementById('myModal').style.display = 'none';
});

// Captura el formulario de edición y guarda los cambios del cliente
document.getElementById('editClientForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener el índice del cliente que estamos editando
  const index = this.dataset.index;

  // Actualizar los datos del cliente
  clients[index].name = document.getElementById('editClientName').value;
  clients[index].email = document.getElementById('editClientEmail').value;
  clients[index].phone = document.getElementById('editClientPhone').value;

  // Renderizar la tabla nuevamente con los cambios
  renderTable();

  // Cerrar el modal de edición
  editModal.style.display = 'none';
});

// Funcionalidad para abrir y cerrar el modal de agregar cliente
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
  modal.style.display = 'block';
};

closeModalBtn.onclick = function() {
  modal.style.display = 'none';
};

// Cerrar el modal de agregar si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Funcionalidad para abrir y cerrar el modal de edición
const editModal = document.getElementById('editModal');
const closeEditModalBtn = document.getElementById('closeEditModal');

closeEditModalBtn.onclick = function() {
  editModal.style.display = 'none';
};

// Cerrar el modal de edición si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (event.target == editModal) {
    editModal.style.display = 'none';
  }
};

// Inicializar la tabla con los datos iniciales
renderTable();
