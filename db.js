const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

async function databaseInitiator() {
    try {
        const mydb = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE || "dbsts",
            port: process.env.PORT || 15662,
        });
        console.log("\x1b[32m%s\x1b[0m", "  ▲", "[ DATABASE ] Connected!");
        return mydb;
    } catch (error) {
        console.log("\n🚧 Error: Not connected to MySQL Database:");
        console.log("   | - If it's not Connected ");
        console.log("   | - Check if MySQL and APACHE is turned off.\n ");
        console.log(error);
    }
}

module.exports = databaseInitiator;

// const mydb = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE || "dbsts",
//     port: process.env.PORT || 15662,
// });

// mydb.connect((err) => {
//     if (err) {
//         console.log(process.env.DB_HOST);
//         console.log(process.env.DB_USER);
//         console.log(process.env.DB_PASSWORD);
//         console.log(process.env.DB_DATABASE);
//         console.log(process.env.DB_PORT);
//         console.log("\n🚧 Error: Not connected to MySQL Database:");
//         console.log("   | - If it's not Connected ");
//         console.log("   | - Check if MySQL and APACHE is turned off.\n ");
//         console.log(err);
//     } else {
//         console.log("\x1b[32m%s\x1b[0m", "  ▲", "[ DATABASE ] Connected!");
//     }
// });
