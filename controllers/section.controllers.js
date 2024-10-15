const section = require("../models/section.model");

exports.getSection = async function (req, res) {
    try {
        const students = await section.getSections();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            error: "From: [ GET SECTION CONTROLLERS ], Failed to retrieve sections",
        });
    }
};

exports.addSection = async function (req, res) {
    const data = req.body;
    try {
        const result = await section.addSection(data);
        res.status(200).json({
            message:
                "From: [ ADD SECTION CONTROLLERS ], Section successfully added",
            authenticated: true,
        });
    } catch (error) {
        res.status(500).json({
            message: "From: [ ADD SECTION CONTROLLERS ], Error adding student",
            error: error.message,
        });
    }
};
