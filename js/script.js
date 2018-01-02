var canvas = $('#line-chart');
$.ajax({
    url: '../json/data.json',
    type: 'GET',
    success: function(res) {
        var dataLineOne = [],
            dataLineTwo = [],
            date = [];
        res = JSON.parse(res);
        res.forEach( function(element, index) {
            dataLineOne.push(element['Oxy']);
            dataLineTwo.push(element['HeartBeat']);
            date.push(element['DateTime']);
        });
        var data = dataChart(date, dataLineOne, dataLineTwo);
        var option = optionChart();
        Chart.Line(canvas,{
              data:data,
              options:option
          });

      },
      error: function(err) {
        console.log(err);
    }
})
function dataChart(date, dataLineOne, dataLineTwo) {
    var data = {
        labels: date,
        type: 'line',
        datasets: [
        {
            label: 'Oxy',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: dataLineOne
        },
        {
            label: 'HeartBeat',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointHoverBorderColor: 'rgba(220,220,220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: dataLineTwo,
        }]
    };
    return data;
}
function optionChart() {
    return {
        responsive: true,
        title:{
            display:true,
            text:'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'HeartBeat'
                },
                ticks: {
                    beginAtZero:true
                }

            }]
        },
        // pan: {
        //     enabled: true,
        //     mode: 'x',
        //     speed: 1
        // },
        // zoom: {
        //     enabled: true,
        //     mode: 'x',
        // }
    }
}
