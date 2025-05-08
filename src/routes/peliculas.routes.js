import { Router } from "express";
import { getPeliculas ,createPelicula, deletePelicula, updatePelicula, getPeliculaById } from "../controllers/peliculas.controller.js";

const router = Router();

//APIREST = Verbos
//GET = Obtener datos
router.get('/peliculas', getPeliculas)
router.get('/peliculas/:id', getPeliculaById)
//POST = Crear datos
router.post('/peliculas', createPelicula)
//PUT = Actualizar datos
router.put('/peliculas/:id',  updatePelicula)
//DELETE = Eliminar datos
router.delete('/peliculas/:id', deletePelicula)

export default router;