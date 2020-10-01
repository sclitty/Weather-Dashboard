moment().format();

// Verifying that script is linked
console.log("HELLO WORLD");

// SETTING VARIABLES
var cityLat;
var cityLong;
var selectedCity = [];
var cityDate = $("#cityDate")

// Setting Time
cityDate.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

// STARTING CLICK EVENT
$(".searchBtn").on("click", (search) => {
    search.preventDefault();
    let city = $(".city-entry").val();
    // Testing input connection
    console.log("clicked!");
    console.log(city);

    // Pushing entered city into an array
    selectedCity.push(city);
    console.log(selectedCity);

    // TODO: Putting selected searched city into local storage
    // -------------------------------------------------------

    // REMOVING HIDDEN CONTAINERS
    $("#currentCity").removeClass("hide");
    $("#day1").removeClass("hide");
    $("#day2").removeClass("hide");
    $("#day3").removeClass("hide");
    $("#day4").removeClass("hide");
    $("#day5").removeClass("hide");
    
    // APPENDING NEW BUTTON TO SELECTED CITIES

    // Selecting last in array...
    let last = [ ...selectedCity].pop()
    // console.log(last)

    let selectedCityBtn = $("<button>");
    selectedCityBtn.addClass("list-group-item list-group-item-action");
    selectedCityBtn.text(city);
    $("#savedCities").prepend(selectedCityBtn);

}); 

$.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?" + city + "q=&appid=7c97e50f070e269534e301c206d179f4",
        method: "GET"
    }).then(function(response) {
        cityName = response.name
        cityTemp = ((response.main.temp) * 1.8 - 459.67).toFixed(0)
        cityWind = ((response.wind.speed) * .6214).toFixed(1)
        cityDew = response.main.humidity
        cityLat = response.coord.lat
        cityLong = response.coord.lon
        curDate = response.dt
        forcastPic = response.weather[0].icon
        console.log(cityName)
    });