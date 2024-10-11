let searchCity = document.querySelector(".search input");
let btn = document.querySelector(".search button");



const apikey = "4ede0d06f6cc955d87edc32bb0112b48";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let arrCity = ["Mumbai", "Shanghai", "London", "Paris", "New York", "Dubai"];

const popularCityWeather = async (city) => {

    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();

    const li = document.createElement("li");
    li.innerHTML = city;
    li.classList.add("box");
    document.querySelector(".boxes").appendChild(li);
    const para = document.createElement("p");
    para.innerHTML = `${Math.round(data.main.temp)}°C`;
    li.appendChild(para);

};

async function checkWeather(city) {

    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    

    console.log(data);
    
    
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(" .info img").src = `images/${data.weather[0].main}.png`;
    document.querySelector(".wind div p").innerHTML = `${data.wind.speed} m/s`;
    document.querySelector(".humidity div p").innerHTML = data.main.humidity;
    console.log(data.weather[0].main);

       
 };

for (let i = 0; i < 6; i++) {
    const element = arrCity[i];
    popularCityWeather(element);
    
}

if(searchCity.value === ""){
    let defaultCity = "jamshedpur";
    checkWeather(defaultCity);
 }

btn.addEventListener("click",(event) =>{
    event.preventDefault();
    checkWeather(searchCity.value);
    searchCity.value = "";
    
})
