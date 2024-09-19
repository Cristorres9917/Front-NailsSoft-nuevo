// Simulación de datos iniciales
let usuarios = [
  { id: 100, nombreUsuario: "Sebas", tipoDocumento: "C.C", documento: 1234989529, correo: "sebas@gmail.com", fechaRegistro: "10-12-2023", password: 321 }
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
  const tbody = document.querySelector('#usuariosTable tbody'); // Asegúrate de usar el ID correcto aquí
  tbody.innerHTML = ''; // Limpiar el contenido existente
  usuarios.forEach((item, index) => {
    const row = `
      <tr>
        <td>${item.id}</td>
        <td>${item.nombreUsuario}</td>
        <td>${item.tipoDocumento}</td>
        <td>${item.documento}</td>
        <td>${item.correo}</td>
        <td>${item.fechaRegistro}</td>
        <td>${item.password}</td>
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
          // Eliminar el usuario
          usuarios.splice(index, 1);

          // Renderizar la tabla nuevamente con los cambios
          renderTable();

          swalWithBootstrapButtons.fire({
            title: "¡Eliminado!",
            text: "El usuario ha sido eliminado.",
            icon: "success"
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "El usuario no ha sido eliminado.",
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
      const usuario = usuarios[index];

      // Mostrar alerta de confirmación antes de editar
      swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas editar este usuario?",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Sí, editar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // Rellenar el formulario de edición con los datos del usuario
          document.getElementById('userName').value = usuario.nombreUsuario;
          document.getElementById('userStatus').value = usuario.tipoDocumento;
          document.getElementById('userDocument').value = usuario.documento;
          document.getElementById('email').value = usuario.correo;
          document.getElementById('password').value = usuario.password;

          // Almacenar el índice del usuario para la edición
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

// Función para agregar un nuevo usuario
document.getElementById('permissionsForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const userName = document.getElementById('userName').value;
  const userStatus = document.getElementById('userStatus').value;
  const userDocument = document.getElementById('userDocument').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const password = document.getElementById('password').value;
  const roleStatus = document.getElementById('roleStatus').value;

  // Obtener el índice almacenado en el formulario si estamos en modo de edición
  const index = this.dataset.index;

  if (index !== undefined) {
    // Modo de edición: actualizar el usuario existente
    usuarios[index].nombreUsuario = userName;
    usuarios[index].tipoDocumento = userStatus;
    usuarios[index].documento = userDocument;
    usuarios[index].correo = email;
    usuarios[index].fechaRegistro = date;
    usuarios[index].password = password;
    usuarios[index].estado = roleStatus;

    delete this.dataset.index; // Eliminar el índice para salir del modo de edición

    swalWithBootstrapButtons.fire({
      title: "¡Actualizado!",
      text: "El usuario ha sido actualizado correctamente.",
      icon: "success"
    });
  } else {
    // Modo de creación: agregar un nuevo usuario
    const newId = usuarios.length + 1;

    // Crear el nuevo usuario
    const newUsuario = {
      id: newId,
      nombreUsuario: userName,
      tipoDocumento: userStatus,
      documento: userDocument,
      correo: email,
      fechaRegistro: date,
      password: password,
      estado: roleStatus
    };

    // Agregar el nuevo usuario al array de usuarios
    usuarios.push(newUsuario);

    swalWithBootstrapButtons.fire({
      title: "¡Creado!",
      text: "El nuevo usuario ha sido agregado.",
      icon: "success"
    });
  }

  // Volver a renderizar la tabla para mostrar el nuevo usuario
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
