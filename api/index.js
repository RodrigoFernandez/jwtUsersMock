const express = require('express');
const cors = require('cors');
const authRouter = require('./auth');
const usersRouter = require('./users');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Configuración de CORS ---
const corsOptions = {
  origin: '*', //Cambiar cuando se deploye el frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  credentials: true
};

// Middleware
app.use(cors(corsOptions)); // Usar el middleware de CORS con las opciones
app.use(express.json());

// Routes
app.use('/auth', authRouter);
app.use('/api/users', usersRouter);

// Health check route
app.get('/', (req, res) => {
    res.json({ message: 'JWT Mock API is running' });
});

// Start server
/*
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

module.exports = app;
