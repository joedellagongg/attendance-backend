const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("You are in a main server endpoint");
    res.json({
        message: "This server endpoint is for Thesis Purposes Only.",
    });
});

module.exports = router;
