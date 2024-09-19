// Simulación de datos iniciales
let servicios = [
  { id: 1000, idTipoServicio: 1100, nombreServicio: "Manicura", descripcion: ":3", precio: 30000, tiempo: "30 min" }
];

// Configuración de SweetAlert2 con estilos de Bootstrap
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

// Función para renderizar la tabla
function renderTable() {
  const tbody = document.querySelector('#serviciosTable tbody'); // Asegúrate de usar el ID correcto aquí
  tbody.innerHTML = ''; // Limpiar el contenido existente
  servicios.forEach((item, index) => {
    const row = `
      <tr>
        <td>${item.id}</td>
        <td>${item.idTipoServicio}</td>
        <td>${item.nombreServicio}</td>
        <td>${item.descripcion}</td>
        <td>${item.precio}</td>
        <td>${item.tiempo}</td>
        <td class="actions-btn">
          <button class="btn btn-warning btn-sm edit-btn" data-index="${index}"><i class="fa fa-pencil"></i></button>
          <button class="btn btn-danger btn-sm delete-btn" data-index="${index}"><i class="fa fa-trash"></i></button>
          <button class="btn btn-info btn-sm status-btn"><i class="fa fa-toggle-on"></i></button>        
        </td>
      </tr>
    `;
    tbody.innerHTML += row; // Añadir cada fila a la tabla
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
          // Eliminar el servicio
          servicios.splice(index, 1);

          // Renderizar la tabla nuevamente con los cambios
          renderTable();

          swalWithBootstrapButtons.fire({
            title: "¡Eliminado!",
            text: "El servicio ha sido eliminado.",
            icon: "success"
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "El servicio no ha sido eliminado.",
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
      const servicio = servicios[index];

      // Mostrar alerta de confirmación antes de editar
      swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas editar este servicio?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Sí, editar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // Rellenar el formulario de edición con los datos del servicio
          document.getElementById('idTipoServicio').value = servicio.idTipoServicio;
          document.getElementById('serviceName').value = servicio.nombreServicio;
          document.getElementById('description').value = servicio.descripcion;
          document.getElementById('price').value = servicio.precio;
          document.getElementById('time').value = servicio.tiempo;

          // Almacenar el índice del servicio para la edición
          document.getElementById('permissionsForm').dataset.index = index;

          // Abrir el modal de edición
          modal.style.display = 'block';
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

// Función para agregar un nuevo servicio
document.getElementById('permissionsForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const idTipoServicio = document.getElementById('idTipoServicio').value;
  const serviceName = document.getElementById('serviceName').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const time = document.getElementById('time').value;
  const roleStatus = document.getElementById('roleStatus').value;

  // Obtener el índice almacenado en el formulario si estamos en modo de edición
  const index = this.dataset.index;

  if (index !== undefined) {
    // Modo de edición: actualizar el servicio existente
    servicios[index].idTipoServicio = idTipoServicio;
    servicios[index].nombreServicio = serviceName;
    servicios[index].descripcion = description;
    servicios[index].precio = price;
    servicios[index].tiempo = time;
    servicios[index].estado = roleStatus;

    delete this.dataset.index; // Eliminar el índice para salir del modo de edición

    swalWithBootstrapButtons.fire({
      title: "¡Actualizado!",
      text: "El servicio ha sido actualizado correctamente.",
      icon: "success"
    });
  } else {
    // Modo de creación: agregar un nuevo servicio
    const newId = servicios.length + 1;

    // Crear el nuevo servicio
    const newServicio = {
      id: newId,
      idTipoServicio: idTipoServicio,
      nombreServicio: serviceName,
      descripcion: description,
      precio: price,
      tiempo: time,
      estado: roleStatus
    };

    // Agregar el nuevo servicio al array de servicios
    servicios.push(newServicio);

    swalWithBootstrapButtons.fire({
      title: "¡Creado!",
      text: "El nuevo servicio ha sido agregado.",
      icon: "success"
    });
  }

  // Volver a renderizar la tabla para mostrar el nuevo servicio
  renderTable();

  // Cierra el modal después de agregar o editar
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
btn.onclick = function () {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function () {
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Evento para redireccionar al hacer clic en el botón
document.getElementById('redirectButton').addEventListener('click', function () {
  window.location.href = "../modalPermiso"; // URL de destino
});
