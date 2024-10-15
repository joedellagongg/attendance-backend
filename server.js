const express = require("express");
const database = require("./db");
const routes = require("./routes/master");
const cors = require("cors");
const app = express();
const port = 5500;

app.use(express.json());
routes(app);

// app.get("/samplelink/:id", async (req, res) => {
//     const { id } = req.params;

//     console.log(id);

//     const fetch = `SELECT * FROM studuser WHERE student_id = ?`;

//     try {
//         const result = await database.query(fetch, [id]);
//         console.log(result);
//         res.status(200).json({
//             message: "OKAY",
//             // data: result,
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "BAD",
//             data: error,
//         });
//     }
// });

app.listen(port, (err) => {
    if (err) throw err;
    console.log("\x1b[32m%s\x1b[0m", "  ▲", "[ SERVER ] is running!");
});
