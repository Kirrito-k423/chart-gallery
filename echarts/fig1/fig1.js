option = {
    title: {
      text: '10*Algo/n'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
    data  : ['Algo A', 'Algo B','Algo B orderList', 'Algo C', 'Algo D']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['10', '10^2', '10^3', '10^4', '10^5', '10^6'],
      
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Algo A',
        type: 'line',
        data: [4.6, 4.8, 4.95, 4.899, 4.92, 4.85074, 0],
         label: {
                  show: true,
                  position: 'top',
                  fontSize:20,
                  inRange:[0,9],
              }
      },
      {
        name: 'Algo B',
        type: 'line',
        data: [5.8, 1.6, 0.59, 0.196, 0.0604, 0.01985, 0],
         label: {
                  show: true,
                  position: 'top',
                  fontSize:20,
                  inRange:[0,9],
              }
      },{
        name: 'Algo B orderList',
        type: 'line',
        data: [5.83, 5.1, 4.89, 5.072, 4.9527, 5.08, 0],
         label: {
                  show: true,
                  position: 'top',
                  fontSize:20,
                  inRange:[0,9],
              }
      },
      {
        name: 'Algo C',
        type: 'line',
        data: [4.5, 1.7, 0.61, 0.204, 0.0634, 0.01979, 0],
         label: {
                  show: true,
                  position: 'top',
                  fontSize:20,
                  inRange:[0,9],
              }
      },
      {
        name: 'Algo D',
        type: 'line',
        data: [3.4, 3.2, 3.43, 3.386, 3.418, 3.29025, 0],
         label: {
                  show: true,
                  position: 'top',
                  fontSize:20,
                  inRange:[0,9],
              }
      }
    ]
  };