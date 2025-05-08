import {pool} from '../db.js';

//Controlador de peliculas
//1. Obtener datos de la base de datos
export const getPeliculas   = async(req, res) => {
  const [rows] = await pool.query("SELECT * FROM peliculas");
  res.json(rows);
};
//2. Obtener datos de una pelicula por id
export const getPeliculaById   = async(req, res) => {
  const [rows] = await pool.query("SELECT * FROM peliculas WHERE id = ?", [req.params.id]);
  if (rows.length <= 0) return res.status(404).json(
    {
      message: 'Pelicula no encontrada',
      id: req.params.id
    });

  res.json(rows);
};
//3. Crear una pelicula
export const createPelicula = async(req, res) => {
    //1. Obtener datos del JSON (input)
    const {titulo, duracion, clasificacion, alanzamiento} = req.body;
    //2. Ejecutar datos del JSON ()
    const [rows] = await pool.query("INSERT INTO peliculas (titulo, duracion, clasificacion,alanzamiento) VALUES (?,?,?,?)",
    [titulo, duracion, clasificacion, alanzamiento]);

    res.send({
      id: rows.insertId,
      titulo,
      duracion,
      clasificacion,
      alanzamiento
    })
};
//4. Actualizar una pelicula
export const updatePelicula = async(req, res) => {
  const id = req.params.id;
  const {titulo, duracion, clasificacion, alanzamiento} = req.body;
  const querySQL = `
    UPDATE peliculas SET
      titulo = ?,
      duracion = ?,
      clasificacion = ?,
      alanzamiento = ?
    WHERE id = ?
  `

  const [result] = await pool.query(querySQL, [titulo, duracion, clasificacion, alanzamiento, id]);
  if (result.affectedRows <= 0) {
    return res.status(404).json({
      message: 'la pelicula que desea actualizar no existe',
    })
  };

  res.json({message: 'Pelicula actualizada correctamente'});
};
//5. Eliminar una pelicula
export const deletePelicula = async(req, res) => {
  const [result] = await pool.query("DELETE FROM peliculas WHERE id = ?", [req.params.id]);
  if (result.affectedRows <= 0) return res.status(404).json(
    {
      message: 'Pelicula que desea eliminar no existe',
      id: req.params.id
    });

    res.sendStatus(204);
};