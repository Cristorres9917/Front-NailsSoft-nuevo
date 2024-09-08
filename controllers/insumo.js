
  let providers = [
    { name: 'Corta uñas', stock: 100, price: '20.000' },
    { name: 'Tijera de cutícula', stock: 50, price: '15.000' }
  ];

  // Tabla de baja de productos
  let productDrops = [];

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
            <button class="btn btn-warning btn-sm edit-btn"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>
            <button class="btn btn-secondary btn-sm cancel-btn" onclick="anularInsumo(${index})"><i class="fa fa-ban"></i></button>
            <button class="btn btn-info btn-sm status-btn"><i class="fa fa-toggle-on"></i></button>
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
  }

  function renderBajaTable() {
    // Renderiza la tabla de baja de productos aquí si es necesario
  }

  function anularInsumo(index) {
    const insumo = providers[index];
    const fechaBaja = new Date().toISOString().split('T')[0];

    const bajaProducto = {
      product: insumo.name,
      dropDate: fechaBaja,
      dropQuantity: insumo.stock,
      observations: 'Anulado desde Insumos'
    };

    productDrops.push(bajaProducto);

    providers.splice(index, 1);

    renderTable();
    renderBajaTable();
  }

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
  });

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

  renderTable();
