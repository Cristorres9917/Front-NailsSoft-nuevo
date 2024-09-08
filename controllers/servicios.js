
  // Simulación de datos iniciales
  let servicios = [
    { id: 1000, idTipoServicio: 1100 ,nombreServicio: "Manicura", descripcion:":3" , precio:30.000, tiempo:"30 min" }
  ];
  
  // Función para renderizar la tabla
  function renderTable() {
    const tbody = document.querySelector('#serviciosTable tbody'); // Asegúrate de usar el ID correcto aquí
    tbody.innerHTML = ''; // Limpiar el contenido existente
    servicios.forEach((item) => {
      const row = `
        <tr>
          <td>${item.id}</td>
          <td>${item.idTipoServicio}</td>
          <td>${item.nombreServicio}</td>
          <td>${item.descripcion}</td>
          <td>${item.precio}</td>
          <td>${item.tiempo}</td>
          <td class="actions-btn">
            <button class="btn btn-warning btn-sm edit-btn"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-danger btn-sm delete-btn"><i class="fa fa-trash"></i></button>
            <button class="btn btn-info btn-sm status-btn"><i class="fa fa-toggle-on"></i></button>        
          </td>
        </tr>
      `;
      tbody.innerHTML += row; // Añadir cada fila a la tabla
    });
  }
  
  // Función para agregar un nuevo usuario
document.getElementById('permissionsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    
    const idTipoServicio = document.getElementById('idTipoServicio').value;
    const serviceName = document.getElementById('serviceName').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const time = document.getElementById('time').value;
    const roleStatus = document.getElementById('roleStatus').value;
    
    


    // Puedes manejar el ID de forma más sofisticada, aquí solo incrementa según el tamaño del array
    const newId = servicios.length + 1; 

    // Crear el nuevo rol
    const newServicio = {
        id: newId,
        nombreServicio: serviceName,
        descripcion: description,
        precio: price,
        tiempo: time,
        estado: roleStatus,
    };

    // Agregar el nuevo rol al array de roles
    servicios.push(newServicio);

    // Volver a renderizar la tabla para mostrar el nuevo rol
    renderTable();

    // Cierra el modal después de agregar
    modal.style.display = "none";
});

// Inicialización de la tabla con datos simulados
renderTable();
  
  
  
  
  
  
  // Obtener el modal
  var modal = document.getElementById("myModal");
  
  // Obtener el botón que abre el modal
  var btn = document.getElementById("openModalBtn");
  
  // Obtener el elemento <span> que cierra el modal
  var span = document.getElementsByClassName("close")[0];
  
  // Cuando el usuario hace clic en el botón, abre el modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // Cuando el usuario hace clic en <span> (x), cierra el modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // Cuando el usuario hace clic fuera del modal, cierra el modal
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
  
    
  
  
  
  document.getElementById('redirectButton').addEventListener('click', function() {
  href="../modalPermiso"; // URL de destino
  });
  