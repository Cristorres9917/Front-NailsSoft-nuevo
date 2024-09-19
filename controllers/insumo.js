let providers = [
  { name: 'Corta uñas', stock: 100, price: '20.000' },
  { name: 'Tijera de cutícula', stock: 50, price: '15.000' }
];

// Tabla de baja de productos
let productDrops = [];

// Función para renderizar la tabla de insumos
function renderTable() {
  const tbody = document.querySelector('#providersTable tbody');
  tbody.innerHTML = '';
  providers.forEach((provider, index) => {
    const row = `
      <tr>
        <td>${provider.name}</td>
        <td>${provider.stock}</td>
        <td>${provider.price}</td>
        <td class="actions-btn">
          <button class="btn btn-warning btn-sm edit-btn" onclick="editarInsumo(${index})"><i class="fa fa-pencil"></i></button>
          <button class="btn btn-danger btn-sm delete-btn" onclick="eliminarInsumo(${index})"><i class="fa fa-trash"></i></button>
          <button class="btn btn-secondary btn-sm cancel-btn" onclick="anularInsumo(${index})"><i class="fa fa-ban"></i></button>
          <button class="btn btn-info btn-sm status-btn"><i class="fa fa-toggle-on"></i></button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Función para editar un insumo
function editarInsumo(index) {
  const provider = providers[index];
  Swal.fire({
    title: 'Editar Insumo',
    html:
      `<input type="text" id="editName" class="swal2-input" value="${provider.name}" placeholder="Nombre del Insumo">
       <input type="number" id="editStock" class="swal2-input" value="${provider.stock}" placeholder="Stock">
       <input type="text" id="editPrice" class="swal2-input" value="${provider.price}" placeholder="Precio">`,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      return {
        name: document.getElementById('editName').value,
        stock: document.getElementById('editStock').value,
        price: document.getElementById('editPrice').value,
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
        'El insumo ha sido actualizado.',
        'success'
      );
    }
  });
}

// Función para eliminar un insumo
function eliminarInsumo(index) {
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
        'El insumo ha sido eliminado.',
        'success'
      );
    }
  });
}

// Función para anular un insumo
function anularInsumo(index) {
  const insumo = providers[index];
  Swal.fire({
    title: '¿Estás seguro?',
    text: "El insumo será anulado y movido a baja de productos.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, anular',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      const fechaBaja = new Date().toISOString().split('T')[0];

      const bajaProducto = {
        product: insumo.name,
        dropDate: fechaBaja,
        dropQuantity: insumo.stock,
        observations: 'Anulado desde Insumos'
      };

      productDrops.push(bajaProducto);

      // Eliminar el elemento del array
      providers.splice(index, 1);

      // Volver a renderizar la tabla
      renderTable();
      renderBajaTable(); // Puedes implementar esta función para mostrar los productos anulados

      // Mostrar mensaje de éxito
      Swal.fire(
        '¡Anulado!',
        'El insumo ha sido movido a baja de productos.',
        'success'
      );
    }
  });
}

// Captura el formulario y agrega un nuevo insumo
document.getElementById('providerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const providerName = document.getElementById('providerName').value;
  const stock = document.getElementById('contact').value;
  const price = document.getElementById('contactNumber').value;

  providers.push({
    name: providerName,
    stock: Number(stock),
    price: price
  });

  renderTable();

  document.getElementById('myModal').style.display = 'none';

  // Limpiar el formulario
  document.getElementById('providerForm').reset();

  // Mostrar mensaje de éxito
  Swal.fire(
    '¡Agregado!',
    'El insumo ha sido registrado con éxito.',
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

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Inicializa la tabla con datos iniciales
renderTable();