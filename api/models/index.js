import { db } from "../config/db.js";
import { Usuario } from "./usuarios.model.js";
import { Departamento } from "./departamentos.model.js";
import { Municipio } from "./municipios.model.js";
import { Colegio } from "./colegios.model.js";
import { Estudiante } from "./estudiantes.model.js";
import { Puntaje } from "./puntajes.model.js";

export { db, Usuario, Departamento, Municipio, Colegio, Estudiante, Puntaje };