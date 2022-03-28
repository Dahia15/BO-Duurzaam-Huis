
var KW = [-5, 5, 10, 15, 20, 25, 30,];
var weken = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
var ctx = document.getElementById('Amir_Chart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: weken,
        datasets: [{
            label: 'Buiten Temperatuur Per Week',
            data: KW,
            backgroundColor: [
                "#549fbc",
            ],
            borderColor: "#6cadc6",
            borderwidth: 1,
            fill: false,
            lineTension: 0
        }]
    }
})


var KWH = [4050, 3800, 4100, 3500, 4578, 4575, 3800];
var week = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'];
var cntxt = document.getElementById('Dion_Chart');

var myChart = new Chart(cntxt, {
    type: 'pie',
    data: {
        labels: week,
        datasets: [
            {
                label: 'elektriciteit verbruik in KWH',
                data: KWH,
                backgroundColor: [
                    "#468ba4",
                    "#6dabc1",
                    "#224551",
                    "#559db7",
                    "#418198",
                    "#85b9cb",
                    "#316375",
                    
                ],
                borderColor: "black",
                borderWidth: 1,
                fill: false,
                lineTension: 0

            }
        ]
    },

});

var KWH = [11, 15, 13, 9, 15, 17, 10 ];
var week = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'];
var cntxt = document.getElementById('Judensio_Chart');

var myChart = new Chart(cntxt, {
    type: 'pie',
    data: {
        labels: week,
        datasets: [
            {
                label: 'Water verbruik per week in liter',
                data: KWH,
                backgroundColor: [
                    "#00f059",
                    "#02ff60",
                    "#00df53",
                    "#00df53",
                    "#00ce4c",
                    "#00ce4c",
                    "#00ce4c",
                ],
                borderColor: "black",
                borderWidth: 1,
                fill: false,
                lineTension: 0

            }
        ]
    },

});


let current = new Date();
let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
let dateTime = cDate + ' ' + cTime;
console.log(dateTime);
