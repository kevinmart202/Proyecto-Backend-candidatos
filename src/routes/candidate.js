const express = require("express");
const candidateController = require("../controllers/candidate");

const router = express.Router();

// Obtener todos los candidatos
router.get("/", candidateController.getAll);

// Obtener un candidato por ID
router.get("/:id", candidateController.getById);

// CREAR: Se quita el ":id" porque el candidato es nuevo
router.post("/", candidateController.create); 

// ELIMINAR Y ACTUALIZAR: Sí necesitan el ":id"
router.delete("/:id", candidateController.delete);
router.put("/:id", candidateController.update);

module.exports = router;

