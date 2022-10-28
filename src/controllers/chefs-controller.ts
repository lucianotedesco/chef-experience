import { RequestHandler } from "express";
import { Chef } from "../models/entities/chef";

export const getChefById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {

    const chef = await Chef.findByPk(id);
    return res.status(200).json({ chefs: chef });
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllChefs: RequestHandler = async (req, res) => {
    try
    {
      const chefs = await Chef.findAll();
      return res.status(200).json({ chefs: chefs });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
};

export const createChef: RequestHandler = async (req, res) => {
  const chefs = await Chef.create({ ...req.body });

  return res.status(200).json({ chefs: chefs });
};
