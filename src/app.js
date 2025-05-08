import express from 'express';
import peliculasRoutes from './routes/peliculas.routes.js';

//import {pool} from './db.js';
const app = express();

app.use(express.json()); // Recibiendo JSON
app.use('/api/',peliculasRoutes); //Rutas de las peliculas

//Control sobre rutas inexistentes
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Ruta no encontrada'
  });
});

export default app;