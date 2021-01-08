console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityPop = topSevenCities.map(city => parseInt(city.population));

var trace = {
    x: topSevenCityNames,
    y: topSevenCityPop,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "7 Largest Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);
  