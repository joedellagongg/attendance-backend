const database = require("../db");

async function getSections() {
    const fetch = `SELECT * FROM section`;
    try {
        const [results] = await database.query(fetch);
        return results;
    } catch (err) {
        console.error("Error fetching students:", err);
        throw err;
    }
}

async function getSectionbyID(id) {
    const fetch = `SELECT * FROM section WHERE id = ?`;
    try {
        const [results] = await database.query(fetch, [id]);
        return results;
    } catch (err) {
        console.error("Error fetching student id:", err);
        throw err;
    }
}

async function addSection(data) {
    const { strand, level, section } = data;

    console.log("FROM SECTION MODELS", strand, level, section);

    const query =
        "INSERT INTO section (strand, grade_level, section_name) VALUES (?,?,?)";

    try {
        const [addedSection] = await database.execute(query, [
            strand,
            level,
            section,
        ]);
        console.log("Section added:", addedSection);
        return addedSection;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getSectionbyID,
    getSections,
    addSection,
};
