// Generate data
var category = ["case2\n baseline",'compile options','openmp','Floodfill\nScanLine','manual Vec','mmap','OMP_NUM_THREADS','store2stream','OMP_PROC_BIND=true'];
var dottedBase = +new Date();
var lineData = [];
var barData = [57961,9385,2500,2072,1565,1433,1115,1104,1074];

var len = barData.length
var base = barData[0]
for (var i = 0; i < len; i++) {
    lineData[i]=(base/barData[i]).toFixed(2);
}
basemax=lineData[len-1]
for (var i = 0; i < len; i++) {
    barData[i]=(barData[i]/base*basemax).toFixed(2);
}


// option
option = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Speed Up', 'Relative Time'],
        textStyle: {
            color: '#ccc',
                fontSize: 20
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: 'Speed Up',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
    }, {
        name: 'Relative Time',
        type: 'bar',
        barWidth: 50,
        showAllSymbol: true,
        label: {
                show: true,
                position: 'top',
                fontSize:20,
                inRange:[0,9],
            },
        itemStyle: {
            barBorderRadius: 5,
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#14c8d4'},
                    {offset: 1, color: '#43eec6'}
                ]
            )
        },
        data: barData
    }, {
        name: 'line2',
        type: 'bar',
        barGap: '-100%',
        barWidth: 50,
        label: {
                show: true,
                position: 'top',
                fontSize:20
            },
        itemStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: 'rgba(20,200,212,0.5)'},
                    {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                    {offset: 1, color: 'rgba(20,200,212,0)'}
                ]
            )
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            color: '#0f375f'
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};