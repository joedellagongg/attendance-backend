const express = require("express");
const router = express.Router();

const sectionController = require("../controllers/section.controllers");

router.get("/", sectionController.getSection);
router.post("/", sectionController.addSection);

module.exports = router;
