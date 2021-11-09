
const DEFAULT_SIZE = 170

const EastNorth = document.getElementById('EastNorth')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const retrievedData = localStorage.getItem("quentinTarantino");
const data = JSON.parse(retrievedData);

let currentSize = DEFAULT_SIZE

EastNorth.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

function getDate(){
  let d = new Date(); 
	let NoTimeDate = (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear(); 
		return(NoTimeDate);
}
function setCurrentSize(newSize) {
  currentSize = newSize
}
function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
}
function updateSizeValue(value) {
  sizeValue.innerHTML = `${value}`
}
window.onload = () => {}
chartLoad();

function reloadGrid() {
  
  data[data.length] =({ date: getDate(), EastNorth: currentSize });
  localStorage.setItem("quentinTarantino", JSON.stringify(data));
  
  
chartLoad();
}


function chartLoad(){
  
var myNest = JSC.nest().key("date");
console.log(data.length);

var series = [
  //myNest.rollup("ladder").series(data)[0],
  myNest.rollup("EastNorth").series(data)[0]
];



var chart = JSC.chart("chartDiv", {
  debug: true,
  legend_position: "inside bottom",
  type: "line",
  title_label_text: "Series by data column",
  xAxis_label_text: "Date",
  yAxis_label_text: "Units",
  toolbar_items_export_visible: false,
  series:series
});
}
