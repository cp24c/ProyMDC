import { Departamento } from "../../models/departamentos.model.js";

export const agregarDepartamento = async (req, res) => {
    try {
        const { cod_depto, depto } = req.body;

        const agregarDepartamento = await Departamento.create({
            cod_depto,
            depto
        });

        res.status(201).json({
            message: "Departamento creado exitosamente",
            departamento: agregarDepartamento
        });
    } catch (error) {
        res.status(500).json({
            message: "Error interno del servidor",
            error: error
        });
    }
};

export const listarDepartamentos = async (req, res) => {
    try {
        const listarDepartamentos = await Departamento.findAll();
        res.status(200).json(listarDepartamentos)
    } catch (error) {
        res.status(500).json({
            message: "Error interno del servidor",
            error: error
        });
    }
};

export const obtenerDepartamento = async (req, res) => {
    try {
        const { id } = req.params;
        const departamento = await Departamento.findByPk(id);
        if (departamento) {
            res.status(200).json(departamento);
        } else {
            res.status(404).json({ message: "Recurso no encontrado" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error del servidor",
            error: error.message
        });
    }
};

export const eliminarDepartamento = async (req, res) => {
    try {
        const { id } = req.params;
        const departamento = await Departamento.findByPk(id);
        if (departamento) {
            await departamento.destroy();
            res.status(200).json({ message: "Departamento eliminado" });
        } else {
            res.status(404).json({ message: "Recurso no encontrado" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error del servidor",
            error: error.message
        });
    }
};