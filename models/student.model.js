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

async function getStudentsbyID(id) {
    // const { id } = data;

    console.log("STUDENT GET 1 MODEL: ", id);

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

async function addStudent(data) {
    const {
        NFCid,
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

    const query = `INSERT INTO studuser (nfc_id, username, password, lname, fname, mname, age, birthday, gender, address, email, father, mother, guardian, studcontact, fathercontact, mothercontact, guardiancontact) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    try {
        const result = await database.execute(query, [
            NFCid,
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
        ]);
        console.log("Student added:", result);
        return result;
    } catch (error) {
        console.error("Error adding student:", error);
        throw error;
    }
}

module.exports = {
    getStudentsbyID,
    getStudents,
    addStudent,
};
