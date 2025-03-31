import { Usuario } from "../models/index.js";

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
};

export const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);

        if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });
        res.json(usuario);
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ message: "Error interno del servidor", error });
    }
}

export const createUsuario = async (req, res) => {
    try {
        const { nombres, apellidos, telefono, correo, contrasena } = req.body;
        const usuario = await Usuario.create({ nombres, apellidos, telefono, correo, contrasena });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Error al crear usuario", error: error });
    }
};

export const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombres, apellidos, telefono, correo, contrasena } = req.body;

        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

        await usuario.update({ nombres, apellidos, telefono, correo, contrasena });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar usuario", error: error });
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const usuario = await Usuario.findByPk(id);
        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

        await usuario.destroy();
        res.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar usuario" });
    }
};