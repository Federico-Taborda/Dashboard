const os = require("os");

const system = {
    username: os.userInfo().username,
    machineName: os.hostname(),
    os: os.type(),
    architecture: os.arch(),
    version: os.release(),
    processor: os.cpus()[0].model,
    memory: Math.ceil(os.totalmem()/1024/1024/1024) + "gb",
    ipv4: os.networkInterfaces().Ethernet[1].address,
    ipv6: os.networkInterfaces().Ethernet[0].address,
    mac: os.networkInterfaces().Ethernet[0].mac
};

module.exports = system;