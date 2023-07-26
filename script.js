const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');

 async function getWeather(city) {
     var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81548692d187cea4ac6642659fd6519d&&units=metric`);
    
     var data = await res.json();
     //console.log(data);
     document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + '°C';
     document.querySelector('.city').innerHTML = data.name;
     document.querySelector('.humidityy').innerHTML = Math.round(data.main.humidity) + '%';
     document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + ' kph';

     if(data.weather[0].main == "Clouds") {
         image.src ="./icons/clouds.png"
     } else if(data.weather[0].main == "Clear") {
         image.src ="./icons/clear.png"
     }else if(data.weather[0].main == "Drizzle") {
         image.src ="./icons/drizzle.png"
     }else if(data.weather[0].main == "Mist") {
         image.src ="./icons/mist.png"
     }else if(data.weather[0].main == "Rain") {
         image.src ="./icons/rain.png"
     }else if(data.weather[0].main == "Snow") {
         image.src ="./icons/snow.png"
     } 
     document.querySelector(".weather").style.display = "block";
 }
 searchBtn.addEventListener('click', () => {
     getWeather(searchInput.value);
 })