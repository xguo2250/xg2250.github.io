

var myChart = echarts.init(document.getElementById('main'));
//start coding
// input data, since brower cache problem I just input the data, not the table
data = [{
"value": 148,
"name": "Brooklyn"
}, {
"value": 68,
"name": "Bronx"
}, {
"value": 73,
"name": "Manhattan"
}, {
"value": 132,
"name": "Queens"
}, {
"value": 26,
"name": "Staten Island"
}]

for (var n in data) {
data[n]['name'] = data[n]['name'] + ' ' + data[n]['value']
}

option = {
//
title: {
    text: 'Pedestrain Fatalities by Borough from 2012 to 2014',
    subtext: 'Source: NY DOT',
    left: '50%',
    top: '30',
    textAlign: 'center',
    textStyle: {
        size: '30',
        color: "black",
        fontWeight: 'normal',
    }
},
tooltip: {
    trigger: 'item',
    formatter: "{b}"
},
series: [{
    type: 'treemap',
    width: '800px',
    height: '500px',
    top: '15%',
    roam: false,
    nodeClick: false,
    breadcrumb: {
        show: false
    },
    label: {
      // SHOW DETAIL DATA
        normal: {
            show: true,
            position: ['10%', '40%']
        }
    },
    itemStyle: {
        normal: {
            show: true,
            textStyle: {

                color: 'black',
                fontSize: 30,
            },
            borderWidth: 2,
            borderColor: 'black',
        },

        emphasis: {
            label: {
                show: true
            }
        }
    },
    data: data
}]
};

    // RETURE THE DATA
    myChart.setOption(option);
