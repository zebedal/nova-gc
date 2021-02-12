/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


const buildChart = () => {
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.XYChart);

// Add percent sign to all numbers
/* chart.numberFormatter.numberFormat = "#.#'%'"; */

// Add data
chart.data = [{
    "nome": "ICT angariação",
    "actual": 300000,
    "objectivo": 420000
}, {
    "nome": "IOT Angariação",
    "actual": 170000,
    "objectivo": 300000
}, {
    "nome": "NNIF's",
    "actual": 290000,
    "objectivo": 280000
}, {
    "nome": "Nova receita",
    "actual": 280000,
    "objectivo": 230000
}, {
    "nome": "Refidelização",
    "actual": 140000,
    "objectivo": 210000
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "nome";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

let label = categoryAxis.renderer.labels.template;
label.wrap = true;
label.maxWidth = 85;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "TCV";
valueAxis.title.fontWeight = 800;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "actual";
series.dataFields.categoryX = "nome";
series.clustered = false;
series.columns.template.fill = am4core.color("#48a700");
series.tooltipText = "Actual {categoryX} : [bold]{valueY}[/]";
series.tooltip.label.fontSize = 12;

let series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "objectivo";
series2.dataFields.categoryX = "nome";
series2.clustered = false;
series2.columns.template.fill = am4core.color("#c20707");
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "Objectivo {categoryX} : [bold]{valueY}[/]";
series2.tooltip.label.fontSize = 12;

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

return chart;
}

export default buildChart;

