// Grafico circular
let ctx = document.getElementById('myChart');
let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Usage", "Not-Usage"],
        datasets: [{
            data: [0, 0],
            backgroundColor: [
                "#e84118",
                "#4cd137"
            ],
            borderColor: [
                "#9c88ff",
                "#9c88ff"
            ],
            borderWith: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Asigna un tamaño al contenedor del canvas.
myPieChart.canvas.parentNode.style.height = '300px';
myPieChart.canvas.parentNode.style.width = '300px';

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