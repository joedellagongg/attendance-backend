const database = require("../db");

async function getStudents() {
    const fetch = "SELECT * FROM studuser";
    try {
        const [results] = await database.query(fetch);
        return results;
    } catch (err) {
        console.error("Error fetching students:", err);
        throw err;
    }
}

async function getStudentbyID(id) {
    console.log("Fetched 1 Student from Models: ", id);

    const fetch = `SELECT * FROM studuser WHERE student_id = ?`;

    try {
        const result = await database.query(fetch, [id]);
        return result[0];
    } catch (error) {
        res.status(500).json({
            message: "BAD",
            data: error,
        });
    }
}

async function getStudentSectionID(id) {
    // console.log("Fetched SectionID from Student: ", id);

    const fetch = `SELECT * FROM studuser WHERE section_id = ?`;

    try {
        const result = await database.query(fetch, [id]);
        return result[0];
    } catch (error) {
        res.status(500).json({
            message: "BAD",
            data: error,
        });
    }
}

async function deleteStudentsbyID(id) {
    // const { id } = data;

    console.log("Student Deleted from Models: ", id);

    const fetch = `DELETE FROM studuser WHERE student_id IN (?)`;

    try {
        const result = await database.query(fetch, [id]);
        return result;
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "BAD",
            data: error,
        });
    }
}

async function addStudent(data) {
    const {
        NFCid,
        urlID,
        uname,
        upass,
        lastName,
        firstName,
        middleName,
        Age,
        Birthday,
        Gender,
        Address,
        emailAddress,
        fatherName,
        motherName,
        guardianName,
        studentContact,
        fatherContact,
        motherContact,
        guardianContact,
    } = data;


    const query = `INSERT INTO studuser (nfc_id, section_id, username, password, lname, fname, mname, age, birthday, gender, address, email, father, mother, guardian, studcontact, fathercontact, mothercontact, guardiancontact) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    try {
        const result = await database.execute(query, [
            NFCid || null,
            urlID || null,
            uname,
            upass,
            lastName || null,
            firstName || null,
            middleName || null,
            Age || null,
            Birthday || null,
            Gender || null,
            Address || null,
            emailAddress || null,
            fatherName || null,
            motherName || null,
            guardianName || null,
            studentContact || null,
            fatherContact || null,
            motherContact || null,
            guardianContact || null,
        ]);
        console.log("Student added:", result);
        return result;
    } catch (error) {
        console.error("Error adding student:", error);
        throw error;
    }
}

module.exports = {
    getStudentbyID,
    getStudentSectionID,
    deleteStudentsbyID,
    getStudents,
    addStudent,
};
