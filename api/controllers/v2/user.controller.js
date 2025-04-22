import { where } from "sequelize";
import { user } from "../../models/index.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
    try {
        const users = await user.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error getting users", error: error });
    }
};

export const getUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const get_user = await user.findByPk(user_id);

        if (!get_user) return res.status(404).json({ message: "User not found", error: error });
        res.json(get_user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error });
    }
}

export const addUser = async (req, res) => {
    try {
        const { first_name, last_name, phone_number, email, password } = req.body;

        if (!first_name || !last_name || !phone_number || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await user.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ error: "Email already in use" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const created_user = await user.create({ first_name, last_name, phone_number, email, password: hashedPassword });

        res.status(201).json(created_user);
    } catch (error) {
        res.status(500).json({ error: "Error creating user", error: error });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { first_name, last_name, phone_number, email, password } = req.body;

        const user_found = await user.findByPk(user_id);
        if (!user_found) return res.status(404).json({ error: "User not found" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user_update = await user.update({ first_name, last_name, phone_number, email, hashedPassword }, { where: { user_id }, returning: true });
        res.json(user_update);
    } catch (error) {
        res.status(500).json({ error: "Error updating user", error: error });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { user_id } = req.params;

        const user_found = await user.findByPk(user_id);
        if (!user_found) return res.status(404).json({ error: "User not found" });

        await user.destroy({ where: { user_id } });
        res.json({ message: "User successfully deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user", error: error });
    }
};