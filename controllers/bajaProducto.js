// Simulación de datos iniciales (puedes reemplazarlos con datos reales de tu base de datos)
let productDrops = [
  { product: 'Esmalte Rojo', dropDate: '2024-08-01', dropQuantity: 10, observations: 'Defectuosos' },
];

// Configuración de SweetAlert2
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

// Función para renderizar la tabla de baja de productos
function renderTable() {
  const tbody = document.querySelector('#productDropTable tbody');
  tbody.innerHTML = '';
  productDrops.forEach((drop, index) => { // Añadir índice para identificar el elemento
    const row = `
      <tr>
        <td>${drop.product}</td>
        <td>${drop.dropDate}</td>
        <td>${drop.dropQuantity}</td>
        <td>${drop.observations}</td>
        <td class="actions-btn">
          <button class="btn btn-danger btn-sm delete-btn" data-index="${index}"><i class="fa fa-trash"></i></button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  // Agregar eventos de clic para los botones de eliminar
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      deleteProductDrop(index); // Llamar a la función de eliminación
    });
  });
}

// Función para eliminar un producto de baja con confirmación
function deleteProductDrop(index) {
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
      // Eliminar el elemento del array
      productDrops.splice(index, 1);
      
      // Volver a renderizar la tabla
      renderTable();

      swalWithBootstrapButtons.fire(
        "¡Eliminado!",
        "La baja de producto ha sido eliminada.",
        "success"
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire(
        "Cancelado",
        "No se ha eliminado la baja del producto.",
        "error"
      );
    }
  });
}

// Inicializa la tabla con datos iniciales
renderTable();
