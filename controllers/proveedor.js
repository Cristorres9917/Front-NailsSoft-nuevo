 // Simulación de datos iniciales (puedes reemplazarlos con datos reales de tu base de datos)
 let providers = [
  { name: 'DistriNails', contact: 'Cristian Torres', contactNumber: '3015789978', supplies: 'Esmaltes, Limas' },
];

// Función para renderizar la tabla de proveedores
function renderTable() {
  const tbody = document.querySelector('#providersTable tbody');
  tbody.innerHTML = '';
  providers.forEach((provider, index) => { // Añadir índice para identificar el elemento
    const row = `
      <tr>
        <td>${provider.name}</td>
        <td>${provider.contact}</td>
        <td>${provider.contactNumber}</td>
        <td>${provider.supplies}</td>
        <td class="actions-btn">
          <button class="btn btn-warning btn-sm edit-btn" data-index="${index}"><i class="fa fa-pencil"></i></button>
          <button class="btn btn-danger btn-sm delete-btn" data-index="${index}"><i class="fa fa-trash"></i></button>
          <button class="btn btn-info btn-sm status-btn"><i class="fa fa-toggle-on"></i></button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  // Agregar eventos de clic para los botones de editar
  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      editProvider(index); // Llamar a la función de edición
    });
  });

  // Agregar eventos de clic para los botones de eliminar
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      deleteProvider(index); // Llamar a la función de eliminación
    });
  });
}

// Función para editar un proveedor
function editProvider(index) {
  const provider = providers[index];
  Swal.fire({
    title: 'Editar Proveedor',
    html:
      `<input type="text" id="editName" class="swal2-input" value="${provider.name}" placeholder="Nombre del Proveedor">
       <input type="text" id="editContact" class="swal2-input" value="${provider.contact}" placeholder="Contacto">
       <input type="text" id="editContactNumber" class="swal2-input" value="${provider.contactNumber}" placeholder="Número de Contacto">
       <input type="text" id="editSupplies" class="swal2-input" value="${provider.supplies}" placeholder="Suministros">`,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      return {
        name: document.getElementById('editName').value,
        contact: document.getElementById('editContact').value,
        contactNumber: document.getElementById('editContactNumber').value,
        supplies: document.getElementById('editSupplies').value,
      };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Actualizar los valores en el array
      providers[index] = {
        ...providers[index],
        ...result.value,
      };

      // Volver a renderizar la tabla
      renderTable();

      // Mostrar mensaje de éxito
      Swal.fire(
        '¡Actualizado!',
        'El proveedor ha sido actualizado.',
        'success'
      );
    }
  });
}

// Función para eliminar un proveedor
function deleteProvider(index) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Eliminar el elemento del array
      providers.splice(index, 1);

      // Volver a renderizar la tabla
      renderTable();

      // Mostrar mensaje de éxito
      Swal.fire(
        '¡Eliminado!',
        'El proveedor ha sido eliminado.',
        'success'
      );
    }
  });
}

// Captura el formulario y agrega un nuevo proveedor
document.getElementById('providerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtén los valores del formulario
  const providerName = document.getElementById('providerName').value;
  const contact = document.getElementById('contact').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const supplies = document.getElementById('supplies').value;

  // Agrega el nuevo proveedor a la lista
  providers.push({
    name: providerName,
    contact: contact,
    contactNumber: contactNumber,
    supplies: supplies
  });

  // Renderiza nuevamente la tabla con los nuevos datos
  renderTable();

  // Cierra el modal después de guardar
  document.getElementById('myModal').style.display = 'none';

  // Limpiar el formulario
  document.getElementById('providerForm').reset();

  // Mostrar mensaje de éxito
  Swal.fire(
    '¡Agregado!',
    'El proveedor ha sido registrado con éxito.',
    'success'
  );
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

// Cierra el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Inicializa la tabla con datos iniciales
renderTable();