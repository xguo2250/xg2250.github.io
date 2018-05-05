var myChart = echarts.init(document.getElementById('main'));
    //start coding

    //define x axis

    var pmdata = [

    [1,23],[2,95],[3,25],[4,173],[5,54],[6,150],[7,102],[8,22],[9,17],[10,69],[11,81],[12,10],[13,106],[14,168],[15,55],[16,457],[17,115],[18,56],[19,185],[20,9],[21,23],[22,117],[23,240],[24,178],[25,15],[26,35],[27,136],[28,57],[29,132],[30,16],[31,70],[32,152],[33,15],[34,6],[35,11],[36,116],[37,136],[38,94],[39,20],[40,14],[41,18],[42,90],[43,36],[44,214],[45,218],[46,279],[47,259],[48,88],[49,82],[50,38],[51,221],[52,267],[53,323],[54,270],[55,347],[56,397],[57,551],[58,8],[59,106],[60,14],[61,174],[62,260],[63,8],[64,27],[65,13],[66,26],[67,205],[68,145],[69,96],[70,272],[71,11],[72,15],[73,12],[74,109],[75,73],[76,36],[77,52],[78,79],[79,17],[80,20],[81,37],[82,128],[83,270],[84,226],[85,331],[86,444],[87,100],[88,23],[89,21],[90,254],[91,121],[92,84],[93,14],[94,41],[95,8],[96,39],[97,110],[98,206],[99,62],[100,71],[101,40],[102,114],[103,175],[104,280],[105,93],[106,51],[107,106],[108,170],[109,44],[110,23],[111,23],[112,56],[113,174],[114,121],[115,169],[116,42],[117,20],[118,68],[119,133],[120,135],[121,144],[122,50],[123,121],[124,46],[125,31],[126,103],[127,84],[128,61],[129,69],[130,62],[131,22],[132,23],[133,86],[134,14],[135,69],[136,56],[137,95],[138,132],[139,161],[140,20],[141,81],[142,182],[143,85],[144,95],[145,51],[146,19],[147,13],[148,15],[149,41],[150,100],[151,125],[152,29],[153,20],[154,25],[155,48],[156,43],[157,88],[158,3],[159,48],[160,32],[161,80],[162,16],[163,18],[164,25],[165,30],[166,89],[167,191],[168,49],[169,11],[170,181],[171,19],[172,62],[173,40],[174,16],[175,47],[176,85],[177,87],[178,11],[179,14],[180,60],[181,93],[182,102],[183,56],[184,256],[185,152],[186,96],[187,180],[188,132],[189,26],[190,14],[191,15],[192,12],[193,6],[194,10],[195,21],[196,50],[197,159],[198,129],[199,125],[200,66],[201,55],[202,12],[203,300],[204,13],[205,89],[206,31],[207,112],[208,133],[209,110],[210,92],[211,148],[212,180],[213,123],[214,101],[215,82],[216,5],[217,31],[218,8],[219,48],[220,72],[221,72],[222,37],[223,6],[224,19],[225,38],[226,28],[227,26],[228,48],[229,37],[230,59],[231,78],[232,81],[233,138],[234,42],[235,116],[236,4],[237,7],[238,13],[239,38],[240,66],[241,49],[242,196],[243,58],[244,144],[245,39],[246,8],[247,31],[248,109],[249,138],[250,176],[251,3],[252,31],[253,74],[254,93],[255,68],[256,50],[257,11],[258,4],[259,22],[260,44],[261,67],[262,118],[263,115],[264,67],[265,127],[266,36],[267,14],[268,148],[269,123],[270,10],[271,98],[272,17],[273,22],[274,91],[275,64],[276,84],[277,78],[278,8],[279,18],[280,104],[281,272],[282,343],[283,328],[284,246],[285,3],[286,9],[287,31],[288,13],[289,17],[290,87],[291,155],[292,292],[293,268],[294,38],[295,104],[296,145],[297,253],[298,331],[299,9],[300,35],[301,90],[302,105],[303,163],[304,144],[305,12],[306,6],[307,11],[308,118],[309,8],[310,7],[311,60],[312,74],[313,33],[314,38],[315,14],[316,5],[317,16],[318,21],[319,128],[320,22],[321,14],[322,52],[323,346],[324,314],[325,93],[326,31],[327,111],[328,19],[329,157],[330,241],[331,13],[332,77],[333,301],[334,23],[335,14],[336,52],[337,11],[338,9],[339,13],[340,16],[341,54],[342,40],[343,339],[344,63],[345,14],[346,17],[347,58],[348,53],[349,10],[350,9],[351,152],[352,132],[353,17],[354,30],[355,21],[356,80],[357,95],[358,12],[359,16],[360,131],[361,194],[362,69],[363,56],[364,49],[365,17]

    ];
    var winddata = [

      [1,48.73],[2,1.78],[3,20.56],[4,1.79],[5,3.13],[6,18.78],[7,8.94],[8,8.94],[9,42.47],[10,2.67],[11,5.37],[12,0.89],[13,2.67],[14,1.78],[15,1.79],[16,5.81],[17,1.79],[18,0.89],[19,0.89],[20,183.27],[21,0.89],[22,0.89],[23,0.89],[24,11.63],[25,14.75],[26,25.94],[27,22.81],[28,8.94],[29,1.79],[30,8.94],[31,0.89],[32,0.89],[33,49.17],[34,71.09],[35,72.87],[36,3.56],[37,0.89],[38,39.35],[39,7.15],[40,109.08],[41,4.92],[42,1.78],[43,11.18],[44,64.82],[45,2.67],[46,3.58],[47,0.89],[48,10.28],[49,22.36],[50,1.79],[51,10.73],[52,0.89],[53,1.79],[54,1.78],[55,3.58],[56,2.67],[57,1.78],[58,4.02],[59,7.6],[60,36.65],[61,1.79],[62,1.79],[63,33.97],[64,7.15],[65,4.92],[66,8.94],[67,4.47],[68,4.02],[69,0.89],[70,0.89],[71,4.02],[72,1.79],[73,3.13],[74,1.79],[75,3.13],[76,27.27],[77,13.86],[78,6.26],[79,90.74],[80,6.26],[81,4.92],[82,4.92],[83,4.46],[84,1.79],[85,1.79],[86,15.19],[87,4.02],[88,4.92],[89,1.79],[90,4.92],[91,3.57],[92,21.02],[93,50.96],[94,3.58],[95,21.47],[96,4.02],[97,1.79],[98,3.13],[99,4.92],[100,22.35],[101,1.79],[102,3.13],[103,5.81],[104,3.58],[105,21.9],[106,0.89],[107,9.39],[108,3.13],[109,16.99],[110,21.91],[111,1.79],[112,3.58],[113,89.41],[114,2.68],[115,3.57],[116,6.26],[117,17.88],[118,3.13],[119,1.79],[120,3.13],[121,9.84],[122,180.59],[123,16.1],[124,230.66],[125,3.58],[126,1.79],[127,25.03],[128,4.02],[129,22.8],[130,4.02],[131,9.84],[132,12.52],[133,1.79],[134,203.4],[135,3.13],[136,4.02],[137,4.02],[138,2.67],[139,8.05],[140,3.13],[141,4.47],[142,9.84],[143,22.35],[144,24.6],[145,38.46],[146,18.77],[147,67.49],[148,4.02],[149,2.68],[150,14.75],[151,1.79],[152,3.13],[153,2.68],[154,1.79],[155,1.79],[156,3.13],[157,11.18],[158,38.45],[159,1.79],[160,1.79],[161,5.81],[162,4.92],[163,1.79],[164,3.13],[165,2.68],[166,6.71],[167,4.92],[168,3.58],[169,0.89],[170,19.21],[171,16.99],[172,1.79],[173,4.46],[174,1.79],[175,4.02],[176,14.76],[177,7.14],[178,4.02],[179,45.59],[180,3.13],[181,7.15],[182,12.97],[183,3.58],[184,1.79],[185,3.57],[186,12.08],[187,50.08],[188,19.68],[189,5.81],[190,3.13],[191,1.79],[192,3.13],[193,42],[194,9.39],[195,3.58],[196,10.28],[197,0.89],[198,5.37],[199,1.79],[200,10.28],[201,21.01],[202,3.13],[203,3.13],[204,12.07],[205,3.13],[206,1.79],[207,1.79],[208,3.13],[209,4.02],[210,104.6],[211,6.71],[212,13.87],[213,1.79],[214,3.56],[215,2.23],[216,30.4],[217,2.67],[218,8.94],[219,1.79],[220,6.71],[221,3.13],[222,3.13],[223,4.02],[224,6.26],[225,4.92],[226,1.79],[227,0.89],[228,2.67],[229,1.79],[230,3.58],[231,3.57],[232,4.92],[233,1.79],[234,3.56],[235,1.79],[236,0.89],[237,4.02],[238,1.78],[239,1.79],[240,7.15],[241,2.68],[242,3.58],[243,0.89],[244,8.95],[245,0.89],[246,2.68],[247,1.79],[248,9.39],[249,1.79],[250,5.37],[251,7.15],[252,1.79],[253,3.58],[254,0.89],[255,2.68],[256,9.84],[257,17.88],[258,11.17],[259,1.79],[260,1.78],[261,1.79],[262,4.92],[263,3.57],[264,3.58],[265,5.37],[266,4.02],[267,1.79],[268,3.58],[269,21.02],[270,1.79],[271,3.58],[272,21.45],[273,3.58],[274,1.79],[275,1.79],[276,1.78],[277,0.89],[278,29.95],[279,1.78],[280,2.68],[281,1.79],[282,0.89],[283,0.89],[284,9.84],[285,15.2],[286,21],[287,3.57],[288,28.6],[289,9.84],[290,2.68],[291,2.67],[292,6.71],[293,8.94],[294,40.68],[295,1.79],[296,1.78],[297,1.78],[298,1.78],[299,43.36],[300,3.13],[301,4.46],[302,1.78],[303,1.78],[304,1.79],[305,20.12],[306,184.16],[307,3.58],[308,5.37],[309,7.6],[310,41.13],[311,3.56],[312,1.79],[313,1.79],[314,1.78],[315,53.21],[316,252.14],[317,9.84],[318,5.37],[319,3.12],[320,14.75],[321,13.86],[322,2.68],[323,2.23],[324,1.79],[325,2.68],[326,26.83],[327,2.68],[328,10.73],[329,4.46],[330,3.56],[331,5.81],[332,1.78],[333,2.23],[334,57.67],[335,313.38],[336,2.68],[337,51.85],[338,37.55],[339,29.05],[340,1.79],[341,12.97],[342,2.68],[343,0.89],[344,23.68],[345,8.05],[346,103.25],[347,0.89],[348,1.79],[349,57.66],[350,250.32],[351,0.89],[352,1.79],[353,64.37],[354,244.97],[355,396.49],[356,1.78],[357,21.02],[358,4.92],[359,7.15],[360,0.89],[361,27.73],[362,1.79],[363,3.13],[364,3.58],[365,177.44]

    ];
    var tempdata = [

      [1,10],[2,5],[3,8],[4,0],[5,5],[6,0],[7,3],[8,0],[9,0],[10,0],[11,1],[12,1],[13,0],[14,1],[15,2],[16,2],[17,1],[18,5],[19,1],[20,2],[21,2],[22,2],[23,2],[24,5],[25,6],[26,2],[27,3],[28,3],[29,1],[30,7],[31,2],[32,4],[33,10],[34,0],[35,0],[36,1],[37,1],[38,-4],[39,1],[40,-3],[41,-3],[42,-2],[43,2],[44,-2],[45,0],[46,1],[47,6],[48,4],[49,1],[50,4],[51,0],[52,2],[53,5],[54,2],[55,6],[56,6],[57,7],[58,7],[59,3],[60,10],[61,6],[62,3],[63,8],[64,7],[65,6],[66,7],[67,6],[68,8],[69,5],[70,11],[71,10],[72,11],[73,13],[74,15],[75,16],[76,19],[77,15],[78,10],[79,16],[80,20],[81,22],[82,18],[83,16],[84,20],[85,19],[86,15],[87,19],[88,21],[89,24],[90,18],[91,21],[92,23],[93,20],[94,20],[95,16],[96,23],[97,21],[98,22],[99,28],[100,17],[101,16],[102,20],[103,21],[104,22],[105,22],[106,19],[107,13],[108,20],[109,14],[110,19],[111,24],[112,26],[113,23],[114,21],[115,24],[116,20],[117,23],[118,24],[119,23],[120,26],[121,26],[122,21],[123,24],[124,19],[125,18],[126,19],[127,24],[128,22],[129,17],[130,18],[131,12],[132,28],[133,26],[134,20],[135,27],[136,27],[137,26],[138,27],[139,24],[140,29],[141,27],[142,31],[143,34],[144,20],[145,28],[146,33],[147,32],[148,35],[149,37],[150,33],[151,32],[152,31],[153,26],[154,30],[155,29],[156,31],[157,22],[158,27],[159,28],[160,28],[161,26],[162,27],[163,33],[164,31],[165,29],[166,32],[167,26],[168,24],[169,29],[170,26],[171,27],[172,26],[173,27],[174,30],[175,30],[176,27],[177,31],[178,32],[179,36],[180,33],[181,33],[182,31],[183,24],[184,28],[185,32],[186,29],[187,29],[188,30],[189,34],[190,30],[191,35],[192,34],[193,32],[194,34],[195,34],[196,31],[197,27],[198,28],[199,31],[200,36],[201,34],[202,32],[203,29],[204,30],[205,28],[206,32],[207,32],[208,34],[209,34],[210,32],[211,26],[212,29],[213,31],[214,32],[215,34],[216,22],[217,29],[218,33],[219,31],[220,31],[221,30],[222,30],[223,32],[224,32],[225,20],[226,27],[227,31],[228,31],[229,30],[230,28],[231,30],[232,32],[233,31],[234,27],[235,30],[236,30],[237,31],[238,33],[239,33],[240,28],[241,26],[242,25],[243,25],[244,25],[245,21],[246,28],[247,31],[248,27],[249,27],[250,27],[251,29],[252,27],[253,27],[254,25],[255,23],[256,25],[257,22],[258,26],[259,20],[260,20],[261,26],[262,24],[263,24],[264,23],[265,21],[266,18],[267,24],[268,20],[269,21],[270,23],[271,21],[272,23],[273,14],[274,14],[275,20],[276,16],[277,15],[278,22],[279,20],[280,18],[281,17],[282,20],[283,21],[284,18],[285,18],[286,16],[287,18],[288,21],[289,20],[290,20],[291,22],[292,20],[293,16],[294,14],[295,11],[296,15],[297,17],[298,17],[299,16],[300,13],[301,13],[302,15],[303,14],[304,15],[305,15],[306,14],[307,17],[308,13],[309,19],[310,10],[311,8],[312,11],[313,14],[314,14],[315,14],[316,7],[317,11],[318,11],[319,8],[320,11],[321,11],[322,11],[323,7],[324,6],[325,10],[326,11],[327,7],[328,10],[329,6],[330,6],[331,6],[332,8],[333,4],[334,8],[335,-1],[336,-1],[337,0],[338,0],[339,2],[340,4],[341,4],[342,3],[343,-1],[344,5],[345,3],[346,2],[347,2],[348,5],[349,4],[350,-1],[351,0],[352,1],[353,5],[354,0],[355,0],[356,6],[357,6],[358,4],[359,7],[360,0],[361,3],[362,7],[363,9],[364,7],[365,0]

    ];


    option = {

      title: {
      top: 10,
      text: 'Beijing PM2.5 & Windspeed & Temperature 2017',
      left: 'center',
      textStyle: {
          color: 'black'
        }
      },

        animation: false,

        legend: {
            data: ['pm2.5', 'windspeed', 'temp'],
            bottom:'93%'
        },
        tooltip: {
        },

        xAxis: {
            type: 'category',
            min:'1',
            max:'365',
            splitLine:{
                show: true
            }

          },

        yAxis: {
            type: 'value',
            min: 'dataMin',
            max: 'dataMax',
            splitLine: {
                show: true
            }
        },
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 0,
                end: 100
            },
            {
                type: 'slider',
                show: true,
                yAxisIndex: [0],
                left: '93%',
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                xAxisIndex: [0],
                start: 1,
                end: 35
            },
            {
                type: 'inside',
                yAxisIndex: [0],
                start: 29,
                end: 36
            }
        ],
        series: [
            {
                name: 'pm2.5',
                type: 'scatter',
                itemStyle: {
                    normal: {
                        opacity: 0.5
                    }
                },
                symbolSize:[8,8],
                data: pmdata
            },
            {
                name: 'windspeed',
                type: 'scatter',
                itemStyle: {
                    normal: {
                        opacity: 0.5
                    }
                },
                symbolSize:[6,6],
                data: winddata
            },
            {
                name: 'temp',
                type: 'scatter',
                itemStyle: {
                    normal: {
                        opacity: 0.5,
                    }
                },
                symbolSize: [5,5],
                data: tempdata
            }
        ]
    }
        myChart.setOption(option);