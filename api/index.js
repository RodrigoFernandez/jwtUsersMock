const express = require('express');
const cors = require('cors');
const authRouter = require('./auth');
const usersRouter = require('./users');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Configuración de CORS ---
const allowedOrigins = ['https://dominio-de-tu-react-app.vercel.app']; // URL de tu frontend
const corsOptions = {
  origin: function (origin, callback) {
    // Permitir si el 'origin' está en la lista O si la petición es sin 'origin' (ej. Postman, o peticiones del mismo servidor)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  credentials: true, // Si necesitas enviar cookies/headers de autorización
  optionsSuccessStatus: 204 // Código de estado para respuestas pre-vuelo (preflight)
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
