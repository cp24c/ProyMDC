import { Estudiante } from "../../models/estudiantes.model.js";
import { Municipio } from "../../models/municipios.model.js";

export const createEstudiante = async (req, res) => {
    try {
        const {
            consecutivo,
            estudiante,
            tipodocumento,
            cod_reside_mcpio,
            cod_mcpio_presentacion,
            fechanacimiento,
            genero,
            nse_individual,
            cod_dane_sede
        } = req.body;

/*
        const municipioResidencia = await Municipio.findByPk(cod_reside_mcpio);
        if (!municipioResidencia) {
            return res.status(400).json({
                message: `El municipio de residencia (${cod_reside_mcpio}) no existe.`
            });
        }

        const municipioPresentacion = await Municipio.findByPk(cod_mcpio_presentacion);
        if (!municipioPresentacion) {
            return res.status(400).json({
                message: `El municipio de presentación (${cod_mcpio_presentacion}) no existe.`
            });
        }

        const colegio = await Colegio.findByPk(cod_dane_sede);
        if (!colegio) {
            return res.status(400).json({
                message: `El colegio con código DANE (${cod_dane_sede}) no existe.`
            });
        }
*/

        const nuevoEstudiante = await Estudiante.create({
            consecutivo,
            estudiante,
            tipodocumento,
            cod_reside_mcpio,
            cod_mcpio_presentacion,
            fechanacimiento,
            genero,
            nse_individual,
            cod_dane_sede
        });

        res.status(201).json({
            message: "Estudiante creado exitosamente",
            estudiante: nuevoEstudiante
        });
    } catch (error) {
        console.error("Error al crear estudiante:", error);
        res.status(500).json({
            message: "Error interno del servidor",
            error
        });
    }
};

export const getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll({
            // include: [
            //     { model: Municipio, as: "residencia" },
            //     { model: Municipio, as: "presentacion" },
            //     { model: Colegio },
            // ],
        });

        res.status(200).json({ data: estudiantes });
    } catch (error) {
        res.status(500).json({ error: error});
    }
};

export const getEstudianteByConsecutivo = async (req, res) => {
    const { consecutivo } = req.params;
    try {
        const estudiante = await Estudiante.findOne({
            where: { consecutivo },
            // include: [
            //     { model: Municipio, as: "residencia" },
            //     { model: Municipio, as: "presentacion" },
            //     { model: Colegio },
            // ],
        });

        if (!estudiante) {
            return res.status(404).json({ message: "Estudiante no encontrado" });
        }

        res.status(200).json({ data: estudiante });
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el estudiante", error: error });
    }
};

export const deleteEstudiante = async (req, res) => {
    const { consecutivo } = req.params;
    try {
        const estudianteToDelete = await Estudiante.findOne({
            where: { consecutivo },
        });

        if (!estudianteToDelete) {
            return res.status(404).json({ message: "Estudiante no encontrado" });
        }

        await Estudiante.destroy({
            where: { consecutivo },
        });

        res.status(200).json({ message: "Estudiante eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el estudiante", error });
    }
};
