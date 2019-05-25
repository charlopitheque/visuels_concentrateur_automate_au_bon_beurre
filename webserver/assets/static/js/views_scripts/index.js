import automatonAPI from '../api/automatons.mjs'
var MONTHS = ['10h01','10h02','10h03','10h04','10h05','10h06','10h07','10h08','10h09','10h10','10h11','10h12','10h13','10h14','10h15','10h16','10h17','10h18','10h19','10h20'];
var configTempCuve = {
    type: 'line',
    data: {
        labels: ['10h01','10h02','10h03','10h04','10h05','10h06','10h07','10h08','10h09','10h10','10h11','10h12','10h13','10h14','10h15','10h16','10h17','10h18','10h19','10h20'],
        datasets: [
            {
                label: 'Automate 1',
                backgroundColor: '#ff0000' ,
                borderColor: '#FF0000',
                data: [10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10,50],
                fill: false,
            },
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: ''
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
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
};
(function () {
    //document.getElementsByClassName('canvas').forEach((element)=>{
                      //  var ctx = element.getContext('2d');
                        //window.charts[i++] = new Chart(ctx, config);
                    //})
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx, configTempCuve);
    $( "#switchUnit" ).click(function() {
        var e = document.getElementById("unit-select");
        var unit_id = e.options[e.selectedIndex].value;
        console.log(unit_id)
        let automatons = automatonAPI.getBy({search:unit_id});
        console.log(automatons)
      });
})();
