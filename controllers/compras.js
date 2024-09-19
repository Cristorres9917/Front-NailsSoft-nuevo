// Simulación de datos iniciales (puedes reemplazarlos con datos reales de tu base de datos)
let purchases = [
  { name: 'DistriNails', receipt: '12345', purchaseDate: '2024-08-26', registrationDate: '2024-08-27', amount: '$500', status: 'Efectiva' },
];

// Función para renderizar la tabla de compras
function renderTable() {
  const tbody = document.querySelector('#providersTable tbody');
  tbody.innerHTML = '';
  purchases.forEach((purchase, index) => { // Añadir índice para identificar el elemento
    const row = `
      <tr>
        <td>${purchase.name}</td>
        <td>${purchase.receipt}</td>
        <td>${purchase.purchaseDate}</td>
        <td>${purchase.registrationDate}</td>
        <td>${purchase.amount}</td>
        <td>
          <select class="status-select" data-index="${index}">
            <option value="Efectiva" ${purchase.status === 'Efectiva' ? 'selected' : ''}>Efectiva</option>
            <option value="Anulada" ${purchase.status === 'Anulada' ? 'selected' : ''}>Anulada</option>
          </select>
        </td>
        <td class="actions-btn">
          <button class="btn btn-warning btn-sm edit-btn" data-index="${index}"><i class="fa fa-pencil"></i></button>
          <button class="btn btn-danger btn-sm delete-btn" data-index="${index}"><i class="fa fa-trash"></i></button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  // Agregar eventos de clic para los botones de editar
  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      editPurchase(index); // Llamar a la función de edición
    });
  });

  // Agregar eventos de clic para los botones de eliminar
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      deletePurchase(index); // Llamar a la función de eliminación
    });
  });

  // Evento para cambiar el estado de la compra
  document.querySelectorAll('.status-select').forEach(select => {
    select.addEventListener('change', function() {
      const index = this.getAttribute('data-index');
      purchases[index].status = this.value; // Actualizar el estado en el array
    });
  });
}

// Función para editar una compra
function editPurchase(index) {
  Swal.fire({
    title: 'Editar Compra',
    html:
      `<input type="text" id="editName" class="swal2-input" value="${purchases[index].name}" placeholder="Nombre del Proveedor">
       <input type="text" id="editReceipt" class="swal2-input" value="${purchases[index].receipt}" placeholder="Número de Factura">
       <input type="date" id="editPurchaseDate" class="swal2-input" value="${purchases[index].purchaseDate}" placeholder="Fecha de Compra">
       <input type="date" id="editRegistrationDate" class="swal2-input" value="${purchases[index].registrationDate}" placeholder="Fecha de Registro">
       <input type="text" id="editAmount" class="swal2-input" value="${purchases[index].amount}" placeholder="Monto">`,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      return {
        name: document.getElementById('editName').value,
        receipt: document.getElementById('editReceipt').value,
        purchaseDate: document.getElementById('editPurchaseDate').value,
        registrationDate: document.getElementById('editRegistrationDate').value,
        amount: document.getElementById('editAmount').value,
      };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Actualizar los valores en el array
      purchases[index] = {
        ...purchases[index],
        ...result.value,
      };

      // Volver a renderizar la tabla
      renderTable();

      // Mostrar mensaje de éxito
      Swal.fire(
        '¡Actualizado!',
        'La compra ha sido actualizada.',
        'success'
      );
    }
  });
}

// Función para eliminar una compra
function deletePurchase(index) {
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
      purchases.splice(index, 1);

      // Volver a renderizar la tabla
      renderTable();

      // Mostrar mensaje de éxito
      Swal.fire(
        '¡Eliminado!',
        'La compra ha sido eliminada.',
        'success'
      );
    }
  });
}

// Captura el formulario y agrega una nueva compra
document.getElementById('providerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtén los valores del formulario
  const providerName = document.getElementById('providerName').value;
  const receipt = document.getElementById('receipt').value;
  const purchaseDate = document.getElementById('purchaseDate').value;
  const registrationDate = document.getElementById('registrationDate').value;
  const amount = document.getElementById('amount').value;

  // Agrega la nueva compra a la lista
  purchases.push({
    name: providerName,
    receipt: receipt,
    purchaseDate: purchaseDate,
    registrationDate: registrationDate,
    amount: amount,
    status: 'Efectiva' // Estado por defecto
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
    'La compra ha sido registrada con éxito.',
    'success'
  );
});

// Funcionalidad para abrir y cerrar el modal
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Llamada inicial para renderizar la tabla
renderTable();

// Buscador de la tabla
document.getElementById('searchInput').addEventListener('keyup', function() {
  const searchText = this.value.toLowerCase();
  const rows = document.querySelectorAll('#providersTable tbody tr');

  rows.forEach(row => {
    const rowData = row.textContent.toLowerCase();
    row.style.display = rowData.includes(searchText) ? '' : 'none';
  });
});
