import { Router } from "express";
import {
    agregarDepartamento,
    listarDepartamentos,
    obtenerDepartamento,
    eliminarDepartamento
} from "../../controllers/v1/departamentos.controller.js";

export const departamentosRoutes = Router();

departamentosRoutes.post("/", agregarDepartamento);
departamentosRoutes.get("/", listarDepartamentos);
departamentosRoutes.get("/:id", obtenerDepartamento);
departamentosRoutes.delete("/:id", eliminarDepartamento);