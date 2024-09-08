
    // Simulación de datos iniciales (puedes reemplazarlos con datos reales de tu base de datos)
      let productDrops = [
        { product: 'Esmalte Rojo', dropDate: '2024-08-01', dropQuantity: 10, observations: 'Defectuosos' },
      ];

      // Función para renderizar la tabla de baja de productos
      function renderTable() {
        const tbody = document.querySelector('#productDropTable tbody');
        tbody.innerHTML = '';
        productDrops.forEach((drop) => {
          const row = `
            <tr>
              <td>${drop.product}</td>
              <td>${drop.dropDate}</td>
              <td>${drop.dropQuantity}</td>
              <td>${drop.observations}</td>
              <td class="actions-btn">
                <button class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>
              </td>
            </tr>
          `;
          tbody.innerHTML += row;
        });
      }

      // Inicializa la tabla con datos iniciales
      renderTable();