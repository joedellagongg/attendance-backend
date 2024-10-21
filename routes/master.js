const express = require("express");
const router = express.Router();
const cors = require("cors");

const main = require("./main.route");
const loginRoute = require("./auth.route");
const studentRoute = require("./student.route");
const sectionRoute = require("./section.route");

const corsSetting = {
    credentials: true,
    origin: "http://localhost:3000",
};

// ORIGIN: Galing Front-end

const registeredRoute = (app) => {
    app.use(cors(corsSetting));
    app.use("/", main);
    app.use("/login", loginRoute);
    // app.use("/add_student", studentRoute);
    app.use("/students", studentRoute);
    // app.use("/student_list/:id", studentRoute);
    // app.use("/student_profile", studentRoute);
    app.use("/section", sectionRoute);
    // app.use("/get_section/:id", sectionRoute);
    // app.use("/add_section", sectionRoute);
};

module.exports = registeredRoute;
