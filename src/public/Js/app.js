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

// Obtiene los datos de la memoria
async function getMemoryUsage() {
    const info = await fetch("/memory", {method: "GET"});
    const json = await info.json();
    const { totalMemory, freeMemory } = json;
    let usageMemory = totalMemory - freeMemory;

    /* console.log(Math.round(usageMemory/1024/1024), Math.round(freeMemory/1024/1024)); */
    let data1 = Math.round(usageMemory/1024/1024);
    let data2 = Math.round(freeMemory/1024/1024);
    myPieChart.data.datasets[0].data[0] = data1;
    myPieChart.data.datasets[0].data[1] = data2;
    myPieChart.update();
    console.log(data1, data2)
};

staticInfo();

// Pide los datos de la memoria cada segundo.
setInterval(getMemoryUsage, 1000);

let ctx = document.getElementById('myChart');
let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Usage", "Not-Usage"],
        datasets: [{
            data: [0, 0],
            backgroundColor: [
                "#4cd137",
                "#e84118"
            ],
            borderColor: [
                "#4cd137",
                "#e84118"
            ],
            borderWith: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

