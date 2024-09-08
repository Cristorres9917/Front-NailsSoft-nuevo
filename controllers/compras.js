
      // Simulación de datos iniciales (puedes reemplazarlos con datos reales de tu base de datos)
      let purchases = [
        { name: 'DistriNails', receipt: '12345', purchaseDate: '2024-08-26', registrationDate: '2024-08-27', amount: '$500', status: 'Efectiva' },
      ];

      // Función para renderizar la tabla de compras
      function renderTable() {
        const tbody = document.querySelector('#providersTable tbody');
        tbody.innerHTML = '';
        purchases.forEach((purchase) => {
          const row = `
            <tr>
              <td>${purchase.name}</td>
              <td>${purchase.receipt}</td>
              <td>${purchase.purchaseDate}</td>
              <td>${purchase.registrationDate}</td>
              <td>${purchase.amount}</td>
              <td>
                <select class="status-select">
                  <option value="Efectiva" ${purchase.status === 'Efectiva' ? 'selected' : ''}>Efectiva</option>
                  <option value="Anulada" ${purchase.status === 'Anulada' ? 'selected' : ''}>Anulada</option>
                </select>
              </td>
              <td class="actions-btn">
                <button class="btn btn-warning btn-sm edit-btn"><i class="fa fa-pencil"></i></button>
                <button class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>
              </td>
            </tr>
          `;
          tbody.innerHTML += row;
        });
      }

      // Captura el formulario y agrega una nueva compra
      document.getElementById('providerForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtén los valores del formulario
        const providerName = document.getElementById('providerName').value;
        const receipt = document.getElementById('contact').value;
        const purchaseDate = document.getElementById('contactNumber').value;
        const registrationDate = document.getElementById('supplies').value;
        const amount = document.getElementById('supplies').value;

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
    