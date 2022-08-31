
const pieCanvas = document.getElementById("pieCanvas")

const pieChart = new Chart(pieCanvas,{
        type:"pie",
        data: {
            labels: ["Analyse","Conception","Developpement","Test"],
            datasets : [{
                data : ["16","34","45","5"],
                backgroundColor : [
                    "Crimson",
                    "lightgreen",
                    "lightblue",
                    "violet"
                ],
                hoverOffset : 4
            }]
        }
    })

/* const barCanvas = document.getElementById("barCanvas");

const barChart = new Chart(barCanvas,{
    type: "bar",
    data: {
        labels: ["Congo","Mali","Madagascar","France"],
        datasets: [{
            data: ["123","36","90","54"],
            backgroundColor : [
            "Crimson",
            "lightgreen",
            "lightblue",
            "violet"
         ]
        }],
        options: {
            scales: {
                y: {
                    suggestedMax: 100,
                    ticks : {
                        font : {
                            size : 12
                        }
                    }
                },
                x: {
                    ticks :{
                        font : {
                            size : 12
                        }
                    }
                }
            }
        }
    }
}) */