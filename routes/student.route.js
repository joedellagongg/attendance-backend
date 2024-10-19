const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student.controllers");

router.get("/", studentController.getStudent);
router.get("/:id", studentController.getStudentbyID);
router.get("/section/:id", studentController.getStudentSectionID);
router.post("/", studentController.addStudent);
router.delete("/:id", studentController.deleteStudentbyID);

module.exports = router;
