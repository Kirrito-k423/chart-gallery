var data1 = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
var data2 = [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
var xdata = [];
var SpeedupData = [];
var len = data1.length
for (var i = 0; i < len; i++) {
    SpeedupData[i]=(data1[i]/data2[i]).toFixed(2);
    xdata[i]=i;
}
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['icpc', 'g++', 'icpc/g++']
    },
    xAxis: [
        {
            type: 'category',
            data: xdata,
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '耗时',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ms'
            }
        },
        {
            type: 'value',
            name: '加速比',
            min: 0,
            max: 1.5,
            interval: 0.3,
            axisLabel: {
                formatter: '{value} Speedup'
            }
        }
    ],
    series: [
        {
            name: 'icpc',
            type: 'bar',
            data: data1
        },
        {
            name: 'g++',
            type: 'bar',
            data: data2
        },
        {
            name: 'icpc/g++',
            type: 'line',
            yAxisIndex: 1,
            data: SpeedupData
        }
    ]
};