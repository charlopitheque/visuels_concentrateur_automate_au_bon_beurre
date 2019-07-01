import automatonAPI from '../api/automatons.mjs'

/**
 *  {
        label: 'Automate 1',
        backgroundColor: '#ff0000' ,
        borderColor: '#FF0000',
        data: [10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10,50],
        fill: false,
        id: 1
    },
 */
let labels = [];
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
               duration : 1000,
               easing: 'easeInQuart'
            },
            hover: {
                animationDuration: 1000
            },
            responsiveAnimationDuration: 1000,
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
                    borderColor: '#FF00'+i+i,
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
        // if(!payload){
        //     payload = {
        //         search : 1
        //     }
        // }
        automatonAPI.getBy(payload).then((res)=>{
            resolve(res)
        }).catch(err=>{
           reject('No data..')
        });
    })
}
function populateCharts(payload){
    console.log('populating ...')
    getData(payload).then(res=>{
        res.forEach(automaton=>{
            let date = new Date(0); // The 0 there is the key, which sets the date to the epoch
            date.setUTCSeconds(automaton.DT_AUTOMATON_EPOCH);
            if(labels.indexOf(date.toLocaleTimeString())=== -1){
                labels.push(date.toLocaleTimeString())
                if(labels.length > 60){
                    labels.shift();
                }
            }
        })
        window.charts.forEach((chart)=>{
            res.forEach(automaton=>{
                chart.data.datasets.forEach(dataset=>{
                    if(dataset.id === automaton.CD_AUTOMATE ){
                        switch (chart.options.meta.slug){
                            case 'tank-temp':
                                dataset.data.push(parseFloat(automaton.IN_TANK_TEMP))
                                break;
                            case 'ext-temp':
                                dataset.data.push(parseFloat(automaton.IN_EXTERNAL_TEMP))
                                break;
                            case 'milk-tank-weight':
                                dataset.data.push(parseFloat(automaton.IN_NETWEIGHT))
                                break;
                            case 'finished-product-mass':
                                break;
                            case 'mesure-ph':
                                dataset.data.push(parseFloat(automaton.IN_PH_RATE))
                                break;
                            case 'concentration-k+':
                                dataset.data.push(parseFloat(automaton.IN_POTASSIUM_RATE))
                                break;
                            case 'concentration-nacl':
                                dataset.data.push(parseFloat(automaton.IN_SODUIM_CHLORIDE_RATE))
                                break;
                            case 'lvl-bact-salmonelle':
                                dataset.data.push(parseFloat(automaton.IN_SALMONELLA_RATE))
                                break;
                            case 'lvl-bact-ecoli':
                                dataset.data.push(parseFloat(automaton.IN_ECOLI_RATE))
                                break;
                            case 'lvl-bact-listeria':
                                dataset.data.push(parseFloat(automaton.IN_LISTERIA_RATE))
                                break;
                        }
                    }
                    if(dataset.data.length>60){
                        dataset.data.shift()
                    }   
                })
                //add data in each case 
            });
            chart.data.labels = labels;
            chart.update();
        })
    });
}
function updateCharts(){
    setInterval(populateCharts({search:1, limit:10}),10000)
}
var e = document.getElementById("unit-select");
    var unit_id = e.options[e.selectedIndex].value;
(function () {

    initiateCharts().then(response=>{
        console.log(response);
        createDatasets().then((response)=>{
            console.log(response);
            populateCharts({search:unit_id, limit:600});
            setTimeout( ()=>{
                setInterval(()=>populateCharts({search:unit_id, limit:10}),60000)
            }, 60000)
        });
    });
    $('#switch-interval').click(()=>{
        console.log('On switch les intervalles')
        window.charts.forEach(chart=>{
            chart.data.datasets.forEach(dataset=>{

            })
            chart.data.labels.slice()
            chart.update();
        })
      
    });
    $( "#switchUnit" ).click(() => {
        var e = document.getElementById("unit-select");
        this.unit_id = e.options[e.selectedIndex].value;
        console.log(unit_id);
        //let automatons = populateCharts({search:unit_id})
        //console.log(automatons)
        //update les datasets de chaques config des graph, voir 
    });
    
})();
