
// Simulación de datos iniciales
let usuarios = [
  { id: 100, nombreUsuario: "Sebas", tipoDocumento: "C.C", documento: 1234989529, correo: "sebas@gmail.com", fechaRegistro: "10-12-2023", password: 321 }
];

// Función para renderizar la tabla
function renderTable() {
  const tbody = document.querySelector('#usuariosTable tbody'); // Asegúrate de usar el ID correcto aquí
  tbody.innerHTML = ''; // Limpiar el contenido existente
  usuarios.forEach((item) => {
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

    
    const userName = document.getElementById('userName').value;
    const userStatus = document.getElementById('userStatus').value;
    const userDocument = document.getElementById('userDocument').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const password = document.getElementById('password').value;
    const roleStatus = document.getElementById('roleStatus').value;
    


    // Puedes manejar el ID de forma más sofisticada, aquí solo incrementa según el tamaño del array
    const newId = usuarios.length + 1; 

    // Crear el nuevo rol
    const newUsuario = {
        id: newId,
        nombreUsuario: userName,
        tipoDocumento: userStatus,
        documento: userDocument,
        correo: email,
        password: password,
        estado: roleStatus,
    };

    // Agregar el nuevo rol al array de roles
    usuarios.push(newUsuario);

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
