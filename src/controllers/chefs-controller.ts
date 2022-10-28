import { RequestHandler } from "express";
import { ChefService } from "../services/chefs-service";

export const getChefById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const chef = await ChefService.getChefById(id);
    return res.status(200).json({ chefs: chef });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getAllChefs: RequestHandler = async (req, res) => {
  try {
    const chefs = await ChefService.getAllChefs();
    return res.status(200).json({ chefs: chefs });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const createChef: RequestHandler = async (req, res) => {
  try {
    await ChefService.createChef({ ...req.body });
    return res.status(200);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
