import automatonAPI from '../api/automatons.mjs'
//var MONTHS = [];
var configTempCuve = {
    type: 'line',
    data: {
        labels: [],
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

/**
 *  {
        label: 'Automate 1',
        backgroundColor: '#ff0000' ,
        borderColor: '#FF0000',
        data: [10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10,50],
        fill: false,
    },
 */

let chartConfigs = [
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta:{
                slug:'tank-temp',
            },
            responsive: true,
            title: {
                display: true,
                text: 'Température cuve'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Temp en degrés'
                    }
                }]
            }
        }
    },
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta:{
                slug:'ext-temp'
            },
            responsive: true,
            title: {
                display: true,
                text: 'Température extérieure'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Temp en degrés'
                    }
                }]
            }
        }
    },
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta:{
                slug:'milk-tank-weight'
            },
            responsive: true,
            title: {
                display: true,
                text: 'Poids du lait en cuve'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Poids en Kg'
                    }
                }]
            }
        }
    },
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta:{
                slug:'finished-product-mass'
            },
            responsive: true,
            title: {
                display: true,
                text: 'Poids du produit fini réalisé'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Poids en Kg'
                    }
                }]
            }
        }
    },
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta:{
                slug:'mesure-ph'
            },
            responsive: true,
            title: {
                display: true,
                text: 'Mesure pH'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Taux de pH'
                    }
                }]
            }
        }
    },
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta:{
                slug:'concentration-k+'
            },
            responsive: true,
            title: {
                display: true,
                text: 'Mesure K+'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'K+ en mg/l'
                    }
                }]
            }
        }
    },
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta:{
                slug:'concentration-nacl'
            },
            responsive: true,
            title: {
                display: true,
                text: 'Concentration de NaCl'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'NaCl en g/l'
                    }
                }]
            }
        }
    },
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta: {
                slug:'lvl-bact-salmonelle'
            },
            responsive: true,
            title: {
                display: true,
                text: 'Niveau bactérien salmonelle'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'exprimé en ppm'
                    }
                }]
            }
        }
    },
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta:{
                slug: 'lvl-bact-ecoli'
            },
            responsive: true,
            title: {
                display: true,
                text: 'Niveau bactérien	E-coli'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'exprimé en ppm'
                    }
                }]
            }
        }
    },
    {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
            meta: {
                slug: "lvl-bact-listeria"
            },
            responsive: true,
            title: {
                display: true,
                text: 'Niveau bactérien Listéria'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            maintainAspectRatio: true,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            scales: {
                xAxes: [{
                    display: true,
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'exprimé en ppm'
                    }
                }]
            }
        }
    }
];
function initiateCharts(){
   return new Promise((resolve, reject)=>{
    let i=1;
    window.charts =  []
    chartConfigs.forEach(element => {
        var ctx = document.getElementById("canvas"+i).getContext("2d");
        window.charts[i] = new Chart(ctx, element);
        i++
    });
    if(i=10){
        resolve('Charts successfully initiated :)');
    }else{
        reject('error, charts didnt initiated');
    }
   })
};
function createDatasets(){
    return new Promise((resolve,reject)=>{
        window.charts.forEach(element=>{
            for(let i=1; i<11; i++){
                element.data.datasets.push({
                    label: 'Automate'+i,
                    backgroundColor: '#ff00'+i+i ,
                    borderColor: '#FF000'+i,
                    data: [],
                    fill: false,
                    id: i
                })
            }  
            window.charts[charts.indexOf(element)].update();
        })
        resolve('All datasets created')
    })
}
function getData(payload = null){
    return new Promise((resolve, reject)=>{
        if(!payload){
            payload = {
                search : 1
            }
        }
        automatonAPI.getBy(payload).then((res)=>{
            resolve(res)
        }).catch(err=>{
           reject('No data..')
        });
    })
};
function populateCharts(timeRange){
    getData().then(res=>{
        window.charts.forEach((chart)=>{
            for(let j =0; j<timeRange; j++){
                chart.data.labels.push('test')
            }
            res.forEach(automaton=>{
                //console.log(chart.options.meta.slug)
                switch (chart.options.meta.slug){
                    case 'tank-temp':
                        chart.data.datasets.forEach(dataset=>{
                            if(dataset.id === automaton.numero_automate ){
                                dataset.data.push(parseFloat(automaton.temp_cuve))
                           }
                        })
                        
                        console.log(chart.data)
                        break;
                    case 'ext-temp':
                        break;
                    case 'milk-tank-weight':
                        break;
                    case 'finished-product-mass':
                        break;
                    case 'mesure-ph':
                        break;
                    case 'concentration-k+':
                        break;
                    case 'concentration-nacl':
                        break;
                    case 'lvl-bact-salmonelle':
                        break;
                    case 'lvl-bact-ecoli':
                        break;
                    case 'lvl-bact-listeria':
                        break;
                }
                //add data in each case 
            })
           
            chart.update();
        })
    });
}

(function () {

    //document.getElementsByClassName('canvas').forEach((element)=>{
                      //  var ctx = element.getContext('2d');
                        //window.charts[i++] = new Chart(ctx, config);
                    //}
    initiateCharts().then(response=>{
        console.log(response)
        createDatasets().then((response)=>{
            console.log(response)
            populateCharts(60);
        })
    })
    $( "#switchUnit" ).click(function() {
        var e = document.getElementById("unit-select");
        var unit_id = e.options[e.selectedIndex].value;
        console.log(unit_id)
        //let automatons = populateCharts({search:unit_id})
        //console.log(automatons)
        //update les datasets de chaques config des graph, voir 
    });
})();
