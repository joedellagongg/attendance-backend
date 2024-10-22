// const section = require("../models/section.model");

const sections = require("../models/section.model");

exports.getSections = async function (req, res) {
    try {
        const section = await sections.getSections();
        res.json(section);
        // console.log(section);
    } catch (error) {
        res.status(500).json({
            error: "From: [ GET SECTION CONTROLLERS ], Failed to retrieve sections",
        });
    }
};

exports.getSectionbyID = async function (req, res) {
    const { id } = req.params;
    console.log(id);
    try {
        const section = await sections.getSectionbyID(id);
        res.json(section);
        console.log(section);
    } catch (error) {
        res.status(500).json({
            error: "From: [ GET SECTION BY ID CONTROLLERS ], Failed to retrieve sections",
        });
    }
};

exports.addSection = async function (req, res) {
    const data = req.body;
    try {
        const result = await sections.addSection(data);
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

exports.deleteSection = async function (req, res) {
    const { id } = req.params;
    console.log(id);
    try {
        const section = await sections.deleteSection(id);
        res.json(section);
        console.log(section);
    } catch (error) {
        res.status(500).json({
            error: "From: [ GET SECTION BY ID CONTROLLERS ], Failed to retrieve sections",
        });
    }
};
