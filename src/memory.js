const os = require("os");

const memory = {
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
};

module.exports = memory;