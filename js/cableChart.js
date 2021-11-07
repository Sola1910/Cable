/*const chart = JSC.chart('chartDiv', {
  debug: true,
  type: 'line',
  legend: {
    template: '%icon %name',
    position: 'inside top left',
  },
  defaultPoint_marker_type: 'none',
  xAxis_crosshair_enabled: true,
  yAxis_formatString: 'c',
  series: [
    {
      name: 'Purchases',
      points: [
        [new Date(2010, 1, 1), 28.15, 32],
        [new Date(2010, 1, 2), 28.2, 32],
        [new Date(2010, 1, 3), 28, 37],
        [new Date(2010, 1, 4), 27.59],
        [new Date(2010, 1, 5), 27.76],
        [new Date(2010, 1, 8), 27.47],
        [new Date(2010, 1, 9), 27.75],
        [new Date(2010, 1, 10), 27.73],
        [new Date(2010, 1, 11), 27.86],
        [new Date(2010, 1, 12), 27.68],
        [new Date(2010, 1, 16), 28.22],
        [new Date(2010, 1, 17), 28.46],
        [new Date(2010, 1, 18), 28.84],
        [new Date(2010, 1, 19), 28.64],
        [new Date(2010, 1, 22), 28.6],
        [new Date(2010, 1, 23), 28.2],
        [new Date(2010, 1, 24), 28.5],
        [new Date(2010, 1, 25), 28.47],
        [new Date(2010, 1, 26), 28.54],
        [new Date(2010, 2, 1), 28.89],
        [new Date(2010, 2, 2), 28.33],
        [new Date(2010, 2, 3), 28.33],
        [new Date(2010, 2, 4), 28.5],
        [new Date(2010, 2, 5), 28.46],
        [new Date(2010, 2, 8), 28.5],
        [new Date(2010, 2, 9), 28.67],
        [new Date(2010, 2, 10), 28.84],
        [new Date(2010, 2, 11), 29.05],
        [new Date(2010, 2, 12), 29.14],
        [new Date(2010, 2, 15), 29.16],
        [new Date(2010, 2, 16), 29.24],
        [new Date(2010, 2, 17), 29.5],
        [new Date(2010, 2, 18), 29.48],
        [new Date(2010, 2, 19), 29.46],
        [new Date(2010, 2, 22), 29.47],
        [new Date(2010, 2, 23), 29.75],
        [new Date(2010, 2, 24), 29.52],
        [new Date(2010, 2, 25), 29.88],
        [new Date(2010, 2, 26), 29.53],
        [new Date(2010, 2, 29), 29.46],
        [new Date(2010, 2, 30), 29.64],
        [new Date(2010, 2, 31), 29.16],
        [new Date(2010, 3, 1), 29.03],
        [new Date(2010, 3, 5), 29.14],
        [new Date(2010, 3, 6), 29.19],
        [new Date(2010, 3, 7), 29.22],
        [new Date(2010, 3, 8), 29.79],
        [new Date(2010, 3, 9), 30.2],
        [new Date(2010, 3, 12), 30.18],
        [new Date(2010, 3, 13), 30.31],
        [new Date(2010, 3, 14), 30.68],
        [new Date(2010, 3, 15), 30.73],
        [new Date(2010, 3, 16), 30.53],
        [new Date(2010, 3, 19), 30.9],
        [new Date(2010, 3, 20), 31.22],
        [new Date(2010, 3, 21), 31.19],
        [new Date(2010, 3, 22), 31.25],
        [new Date(2010, 3, 23), 30.82],
        [new Date(2010, 3, 26), 30.97],
        [new Date(2010, 3, 27), 30.71],
        [new Date(2010, 3, 28), 30.77],
        [new Date(2010, 3, 29), 30.86],
        [new Date(2010, 3, 30), 30.4],
        [new Date(2010, 4, 3), 30.72],
        [new Date(2010, 4, 4), 29.99],
        [new Date(2010, 4, 5), 29.72],
        [new Date(2010, 4, 6), 28.85],
        [new Date(2010, 4, 7), 28.08],
        [new Date(2010, 4, 10), 28.81],
        [new Date(2010, 4, 11), 28.75],
        [new Date(2010, 4, 12), 29.31],
        [new Date(2010, 4, 13), 29.11],
        [new Date(2010, 4, 14), 28.8],
        [new Date(2010, 4, 17), 28.81],
        [new Date(2010, 4, 18), 28.6],
        [new Date(2010, 4, 19), 28.24],
        [new Date(2010, 4, 20), 27.11],
        [new Date(2010, 4, 21), 26.84],
        [new Date(2010, 4, 24), 26.27],
      ],
    },
  ],
});
*/
fetch('https://raw.githubusercontent.com/Sola1910/Cable/main/data.csv')
 //fetch('https://rawgit.com/Sola1910/Cable/blob/5ee8b0bb525e452668654b71e30a34385b315c61/data.csv')
// fetch("https://github.com/Sola1910/Cable/blob/5ee8b0bb525e452668654b71e30a34385b315c61/data.csv")
//fetch('https://github.com/Sola1910/Cable.git/data.csv')
//fetch('https://data.cdc.gov/resource/w9j2-ggv5.csv')
   .then(function (response) {
      return response.text();
   })
   .then(function (text) {
    let series = csvToSeries(text);
    renderChart(series);
  })
   .catch(function (error) {
      //Something went wrong
      console.log(error);
   });

   function csvToSeries(text) {
    const Sys_1 = 'System_1';
    const Sys_2 = 'System_2';
    const Sys_3 = 'System_3';
    const Sys_4 = 'System_4';
    const Sys_5 = 'System_5';
    const Sys_6 = 'System_6';
    const Sys_7 = 'System_7';
    const Sys_8 = 'System_8';
    let dataAsJson = JSC.csv2Json(text);
    let System_1 = [], System_2 = [], System_3 = [], System_4 = [], System_5 = [], System_6 = [], System_7 = [], System_8 = [];
    dataAsJson.forEach(function (row) {
      
      System_1.push({x: row.date, y: row[Sys_1]});
      System_2.push({x: row.date, y: row[Sys_2]});
      System_3.push({x: row.date, y: row[Sys_3]});
      System_4.push({x: row.date, y: row[Sys_4]});
      System_5.push({x: row.date, y: row[Sys_5]});
      System_6.push({x: row.date, y: row[Sys_6]});
      System_7.push({x: row.date, y: row[Sys_7]});
      System_8.push({x: row.date, y: row[Sys_8]});
    });
      //console.log([System_1, System_2, System_3, System_4]);
      return [
        {name: 'System_1', points: System_1},
        {name: 'System_2', points: System_2},
        {name: 'System_3', points: System_3},
        {name: 'System_4', points: System_4},
        {name: 'System_5', points: System_5},
        {name: 'System_6', points: System_6},
        {name: 'System_7', points: System_7},
        {name: 'System_8', points: System_8}
     ];
  }

  function renderChart(series){
    JSC.Chart('chartDiv', {
      title_label_text: 'תרשים מערכות עצירה',
      annotations: [{
        //label_text: 'מתוך קובץ מידע',
        position: 'bottom left'
      }],
          legend_visible: true,
      //defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
      defaultPoint_tooltip: '%seriesName <b>%yValue</b> value',
      xAxis_crosshair_enabled: true,
      xAxis_scale_type: "time",
   
      series: series
    });
  }
  