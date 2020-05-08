const express = require("express");
const system = require("./system");
const memory = require("./memory");
const os = require("os");
const app = express();
const port = 3000;

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile("./public/index.html");
});

app.get("/information", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(system);
});

app.get("/memory", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send({
        totalMemory: os.totalmem(),
        freeMemory: os.freemem()
    });
});

app.listen(port, () => {
    console.log(`Server in port ${port}`);
});