let chart = JSC.chart('chartDiv', { 
  debug: true, 
  type: 'line spline', 
  legend_visible: true, 
  xAxis: { 
    crosshair_enabled: true, 
    scale: { type: 'time' } 
  }, 
  yAxis: { 
    orientation: 'opposite', 
    formatString: 'c'
  }, 
  defaultSeries: { 
    firstPoint_label_text: '<b>%seriesName</b>', 
    defaultPoint_marker: { 
      type: 'circle', 
      size: 8, 
      fill: 'white', 
      outline: { width: 2, color: 'currentColor' } 
    } 
  }, 
  title_label_text: 'נתוני מערכות עצירה', 
  series: [ 
    { 
      name: 'Purchases', 
      points: [ 
        ['1/1/2020', 29.9], 
        ['1/2/2020', 97.5], 
        ['1/3/2020', 110.4], 
        ['1/4/2020', 129.2], 
        ['1/5/2020', 144.0], 
        ['1/6/2020', 176.0] 
      ] 
    }, 
    { 
      name: 'Taxes', 
      points: [ 
        ['1/1/2020', 86.9], 
        ['1/2/2020', 79.5], 
        ['1/3/2020', 95.4], 
        ['1/4/2020', 97.2], 
        ['1/5/2020', 123.0], 
        ['1/6/2020', 111.0] 
      ] 
    }, 
    { 
      name: 'Supplies', 
      points: [ 
        ['1/1/2020', 129.9], 
        ['1/2/2020', 111.5], 
        ['1/3/2020', 66.4], 
        ['1/4/2020', 29.2], 
        ['1/5/2020', 88.0], 
        ['1/6/2020', 102.0] 
      ] 
    }, 
    { 
      name: 'Rent', 
      points: [ 
        ['1/1/2020', 56.9], 
        ['1/2/2020', 56.5], 
        ['1/3/2020', 56.4], 
        ['1/4/2020', 56.2], 
        ['1/5/2020', 75.0], 
        ['1/6/2020', 56.0] 
      ] 
    } 
  ] 
}); 