import {Router} from "express"

import {
    createChef,
    getChefById,
    getAllChefs
} from "./controllers/chefs-controller"

const router = Router()

router.get("/:id", getChefById)
router.get("/", getAllChefs)
router.post("/", createChef)

export default router;