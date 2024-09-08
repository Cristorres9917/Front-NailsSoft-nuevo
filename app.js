const express = require('express');
const path = require('path');

const app = express();

// Configurar la carpeta 'css' como estática
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/css', express.static(path.join(__dirname, 'scss')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Ruta para la página de roles
app.get('/roles', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'roles.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
