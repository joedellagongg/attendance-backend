const express = require("express");
const router = express.Router();

const sectionController = require("../controllers/section.controllers");

router.get("/", sectionController.getSections);
router.get("/:id", sectionController.getSectionbyID);
router.post("/", sectionController.addSection);

module.exports = router;
