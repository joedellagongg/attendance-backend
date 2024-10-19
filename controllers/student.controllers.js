const student = require("../models/student.model");

exports.getStudent = async function (req, res) {
    try {
        const students = await student.getStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            error: "From: [ GET STUDENT CONTROLLERS ], Failed to retrieve students",
        });
    }
};

exports.getStudentbyID = async function (req, res) {
    const { id } = req.params;
    // console.log(id);

    try {
        const students = await student.getStudentbyID(id);
        res.json(students);
    } catch (error) {
        res.status(500).json({
            error: "From: [ GET STUDENT ID CONTROLLERS ], Failed to retrieve students",
        });
    }
};

exports.getStudentSectionID = async function (req, res) {
    const { id } = req.params;

    try {
        const students = await student.getStudentSectionID(id);
        res.json(students);
    } catch (error) {
        res.status(500).json({
            error: "From: [ GET STUDENT SECTION ID CONTROLLERS ], Failed to retrieve students",
        });
    }
};

exports.deleteStudentbyID = async function (req, res) {
    const { id } = req.params;
    console.log("delete: ", id);

    try {
        const students = await student.deleteStudentsbyID(id);
        res.json(students);
    } catch (error) {
        res.status(500).json({
            error: "From: [ DELETE ID CONTROLLERS ], Failed to delete student",
        });
    }
};

exports.addStudent = async function (req, res) {
    const data = req.body;
    try {
        const result = await student.addStudent(data);
        res.status(200).json({
            message:
                "From: [ ADD STUDENT CONTROLLERS ], Data successfully added",
            authenticated: true,
        });
    } catch (error) {
        res.status(500).json({
            message: "From: [ ADD STUDENT CONTROLLERS ], Error adding student",
            error: error.message,
        });
    }
};
