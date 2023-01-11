const { Router } = require("express");
const pruebaController = require("../controllers/prueba-controller");

const router = Router();

router.get("/:idProducto", pruebaController.prueba);
router.get("/:idProducto/comentario", pruebaController.prueba2);
router.get("/:idProducto/comentario/:idLinea?", pruebaController.prueba3);

module.exports = router;
