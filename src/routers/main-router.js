const { Router } = require("express");
const mainController = require("../controllers/main-controllers");

const router = Router();

router.get("/", mainController.home);
router.get("/about", mainController.about);

module.exports = router;
