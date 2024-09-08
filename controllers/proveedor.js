// Simulación de datos iniciales (puedes reemplazarlos con datos reales de tu base de datos)
let providers = [
    { name: 'DistriNails', contact: 'Cristian Torres', contactNumber: '3015789978', supplies: 'Esmaltes, Limas' },
  ];

  // Función para renderizar la tabla de proveedores
  function renderTable() {
    const tbody = document.querySelector('#providersTable tbody');
    tbody.innerHTML = '';
    providers.forEach((provider) => {
      const row = `
        <tr>
          <td>${provider.name}</td>
          <td>${provider.contact}</td>
          <td>${provider.contactNumber}</td>
          <td>${provider.supplies}</td>
          <td class="actions-btn">
            <button class="btn btn-warning btn-sm edit-btn"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>
            <button class="btn btn-info btn-sm status-btn"><i class="fa fa-toggle-on"></i></button>
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
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
