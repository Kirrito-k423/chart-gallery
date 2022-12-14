const posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
];
  app.configParameters = {
    rotate: {
      min: -90,
      max: 90
  },
    align: {
      options: {
        left: 'left',
        center: 'center',
        right: 'right'
    }
  },
    verticalAlign: {
      options: {
        top: 'top',
        middle: 'middle',
        bottom: 'bottom'
    }
  },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos
      ] = pos;
        return map;
    },
    {})
  },
    distance: {
      min: 0,
      max: 100
  }
};
  app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
      const labelOption = {
        rotate: app.config.rotate,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        position: app.config.position,
        distance: app.config.distance
    };
      myChart.setOption({
        series: [
        {
            label: labelOption
        },
        {
            label: labelOption
        },
        {
            label: labelOption
        },
        {
            label: labelOption
        }
      ]
    });
  }
};
  const labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {}
  }
};
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
    }
  },
    legend: {
      data: ['OSACA', 'LLVM-MCA'
    ]
  },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true
      },
        dataView: { show: true, readOnly: false
      },
        magicType: { show: true, type: ['line', 'bar', 'stack'
        ]
      },
        restore: { show: true
      },
        saveAsImage: { show: true
      }
    }
  },
    xAxis: [
    {
        type: 'category',
        axisTick: { show: false
      },
        data: ['Eigen', 'Clang', 'Gzip', 'Tensorflow', 'Redis'
      ]
    }
  ],
    yAxis: [
    {
        type: 'value'
    }
  ],
    series: [
    {
        name: 'OSACA',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series'
      },
        data: [
        0.387,
        0.337,
        0.315,
        0.392,
        0.398
      ]
    },
    {
        name: 'LLVM-MCA',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
      },
        data: [
        0.182,
        0.385,
        0.368,
        0.449,
        0.428
      ]
    }
  ]
};