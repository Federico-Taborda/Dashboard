// Obtiene informacion que no cambiara.
async function staticInfo() {
    const info = await fetch("/information", {method: "GET"});
    const json = await info.json();
    document.getElementById("username").textContent += json.username;
    document.getElementById("machine-name").textContent += json.machineName;
    document.getElementById("os").textContent += json.os;
    document.getElementById("architecture").textContent += json.architecture;
    document.getElementById("version").textContent += json.version;
    document.getElementById("processor").textContent += json.processor;
    document.getElementById("memory").textContent += json.memory;
    document.getElementById("ipv4").textContent += json.ipv4;
    document.getElementById("ipv6").textContent += json.ipv6;
    document.getElementById("mac").textContent += json.mac;
};