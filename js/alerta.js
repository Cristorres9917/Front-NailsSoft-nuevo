// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('deleteButton').addEventListener('click', function() {
      Swal.fire({
        title: "Estas seguro de cerrar sesion?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cerrar sesion"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Has cerrado sesion exitosamente",
            icon: "success"
          }).then(() => {
            // Redirigir a un archivo HTML dentro del proyecto
            window.location.href = "login.html"; // Asegúrate de que esta ruta sea correcta
          });
        }
      });
    });
  });
  