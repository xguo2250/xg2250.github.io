 var myChart = echarts.init(document.getElementById('main'));
    //start coding


    var day = ['1', '2', '3', '4', '5', '6', '7',
            '8', '9', '10','11','12',
            '13', '14', '15', '16', '17', '18',
            '19', '20', '21', '22', '23', '24','25', '26', '27', '28', '29', '30', '31'];
    var Month = ['Jan', 'Feb', 'March',
            'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    //input air quailty data

    var pmdata = [
      [0,0,23],[0,1,95],[0,2,25],[0,3,173],[0,4,54],[0,5,150],[0,6,102],[0,7,22],[0,8,17],[0,9,69],[0,10,81],[0,11,10],[0,12,106],[0,13,168],[0,14,55],[0,15,457],[0,16,115],[0,17,58],[0,18,185],[0,19,9],[0,20,23],[0,21,117],[0,22,240],[0,23,178],[0,24,15],[0,25,35],[0,26,136],[0,27,57],[0,28,132],[0,29,16],[0,30,70],
      [1,0,152],[1,1,15],[1,2,6],[1,3,11],[1,4,116],[1,5,146],[1,6,94],[1,7,20],[1,8,14],[1,9,18],[1,10,90],[1,11,36],[1,12,214],[1,13,218],[1,14,279],[1,15,88],[1,16,82],[1,17,28],[1,18,221],[1,19,267],[1,20,323],[1,21,270],[1,22,347],[1,23,397],[1,24,551],[1,25,8],[1,26,106],[1,27,14],
      [2,0,174],[2,1,260],[2,2,8],[2,3,27],[2,4,13],[2,5,26],[2,6,205],[2,7,145],[2,8,96],[2,9,272],[2,10,11],[2,11,15],[2,12,12],[2,13,109],[2,14,73],[2,15,36],[2,16,52],[2,17,79],[2,18,17],[2,19,20],[2,20,37],[2,21,128],[2,22,270],[2,23,226],[2,24,331],[2,25,444],[2,26,100],[2,27,23],[2,28,21],[2,29,254],[2,30,121],
      [3,0,84],[3,1,14],[3,2,41],[3,3,8],[3,4,39],[3,5,110],[3,6,206],[3,7,62],[3,8,71],[3,9,40],[3,10,114],[3,11,175],[3,12,280],[3,13,93],[3,14,51],[3,15,106],[3,16,170],[3,17,44],[3,18,23],[3,19,56],[3,20,174],[3,21,121],[3,22,169],[3,23,42],[3,24,20],[3,25,68],[3,26,133],[3,27,135],[3,28,144],[3,29,120],
      [4,0,50],[4,1,121],[4,2,46],[4,3,31],[4,4,103],[4,5,84],[4,6,61],[4,7,69],[4,8,62],[4,9,22],[4,10,23],[4,11,86],[4,12,14],[4,13,69],[4,14,56],[4,15,95],[4,16,132],[4,17,161],[4,18,89],[4,19,81],[4,20,182],[4,21,85],[4,22,95],[4,23,51],[4,24,19],[4,25,13],[4,26,15],[4,27,41],[4,28,100],[4,29,125],[4,30,29],
      [5,0,20],[5,1,25],[5,2,48],[5,3,43],[5,4,88],[5,5,3],[5,6,48],[5,7,32],[5,8,80],[5,9,16],[5,10,18],[5,11,25],[5,12,30],[5,13,89],[5,14,191],[5,15,49],[5,16,11],[5,17,181],[5,18,19],[5,19,62],[5,20,40],[5,21,16],[5,22,47],[5,23,85],[5,24,87],[5,25,11],[5,26,14],[5,27,60],[5,28,93],[5,29,102],
      [6,0,56],[6,1,256],[6,2,152],[6,3,96],[6,4,180],[6,5,132],[6,6,26],[6,7,14],[6,8,15],[6,9,12],[6,10,6],[6,11,10],[6,12,21],[6,13,50],[6,14,159],[6,15,129],[6,16,125],[6,17,66],[6,18,55],[6,19,12],[6,20,32],[6,21,13],[6,22,89],[6,23,31],[6,24,112],[6,25,133],[6,26,110],[6,27,92],[6,28,149],[6,29,180],[6,30,123],
      [7,0,101],[7,1,82],[7,2,5],[7,3,31],[7,4,8],[7,5,48],[7,6,72],[7,7,72],[7,8,37],[7,9,6],[7,10,19],[7,11,38],[7,12,28],[7,13,26],[7,14,48],[7,15,37],[7,16,59],[7,17,78],[7,18,81],[7,19,138],[7,20,42],[7,21,116],[7,22,4],[7,23,7],[7,24,13],[7,25,38],[7,26,66],[7,27,49],[7,28,196],[7,29,58],[7,30,144],
      [8,0,39],[8,1,8],[8,2,31],[8,3,109],[8,4,138],[8,5,176],[8,6,3],[8,7,31],[8,8,74],[8,9,93],[8,10,68],[8,11,50],[8,12,11],[8,13,4],[8,14,22],[8,15,44],[8,16,67],[8,17,118],[8,18,115],[8,19,67],[8,20,127],[8,21,36],[8,22,14],[8,23,148],[8,24,123],[8,25,10],[8,26,98],[8,27,17],[8,28,22],[8,29,91],
      [9,0,64],[9,1,94],[9,2,78],[9,3,8],[9,4,18],[9,5,104],[9,6,272],[9,7,343],[9,8,328],[9,9,246],[9,10,3],[9,11,9],[9,12,31],[9,13,13],[9,14,17],[9,15,87],[9,16,155],[9,17,292],[9,18,268],[9,19,38],[9,20,104],[9,21,145],[9,22,253],[9,23,331],[9,24,9],[9,25,35],[9,26,90],[9,27,105],[9,28,163],[9,29,144],[9,30,12],
      [10,0,6],[10,1,11],[10,2,118],[10,3,8],[10,4,7],[10,5,60],[10,6,74],[10,7,33],[10,8,38],[10,9,14],[10,10,5],[10,11,16],[10,12,21],[10,13,14],[10,14,52],[10,15,346],[10,16,314],[10,17,93],[10,18,31],[10,19,111],[10,20,19],[10,21,111],[10,22,193],[10,23,157],[10,24,241],[10,25,13],[10,26,77],[10,27,301],[10,28,23],[10,29,14],
      [11,0,52],[11,1,11],[11,2,9],[11,3,13],[11,4,16],[11,5,54],[11,6,40],[11,7,339],[11,8,63],[11,9,14],[11,10,17],[11,11,58],[11,12,53],[11,13,10],[11,14,9],[11,15,152],[11,16,132],[11,17,17],[11,18,512],[11,19,21],[11,20,80],[11,21,95],[11,22,12],[11,23,6],[11,24,131],[11,25,194],[11,26,69],[11,27,56],[11,28,49],[11,29,17],

      ];

    data = pmdata.map(function (item) {
        return [item[1], item[0], item[2] || '-'];
    });

    option = {

        title: {
        top: 25,
        text: 'Beijing Air Quality 2017',
        left: 'center',
        textStyle: {
            color: 'black'
          }
        },

        tooltip: {
            position: 'top'
        },
        animation: false,
        grid: {
            height: '60%',
            y: '10%'
        },
        xAxis: {
            type: 'category',
            data: day
        },
        yAxis: {
            type: 'category',
            data: Month
        },
        visualMap: {
            min: 0,
            max: 600,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
        },
        series: [{
            name: 'PM2.5',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0，0, 0, 50)'
                }
            }
        }]
    };

        // 
        myChart.setOption(option);