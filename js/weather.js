const searchBtn = document.getElementById("searchBtn")
      ,searchForm = document.querySelector(".search-form")
      ;
let visible = true;

searchBtn.onclick = () =>  {
  if (visible) {
    searchForm.style.visibility = "hidden";
    visible = false;
    searchBtn.innerHTML = `<i class="fa fa-search"></i>`;
  } else {
    searchForm.style.visibility = "visible";
    visible = true;
    searchBtn.innerHTML = "X";
  }
}

const weather = [
  { 
    tmin         : 8
    ,tmax        : 15
    ,isRain      : false
    ,isHeavyRain : false
    ,isOvercast  : "с прояснениями"
    ,humidity    : 51
  },
  { 
    tmin         : 12
    ,tmax        : 25
    ,isRain      : false
    ,isHeavyRain : false
    ,isOvercast  : "переменная"
    ,humidity    : 35
  },
  { 
    tmin         : 9
    ,tmax        : 22
    ,isRain      : true
    ,isHeavyRain : false
    ,isOvercast  : "переменная"
    ,humidity    : 47
  },
  { 
    tmin         : 5
    ,tmax        : 15
    ,isRain      : false
    ,isHeavyRain : false
    ,isOvercast  : "небольшая"
    ,humidity    : 48
  },
  { 
    tmin         : 9
    ,tmax        : 15
    ,isRain      : true
    ,isHeavyRain : true
    ,isOvercast  : "с прояснениями"
    ,humidity    : 85
  },
  {
    tmin         : 8
    ,tmax        : 13
    ,isRain      : false
    ,isHeavyRain : false
    ,isOvercast  : "с прояснениями"
    ,humidity    : 53
  },
  {
    tmin         : 9
    ,tmax        : 15
    ,isRain      : true
    ,isHeavyRain : false
    ,isOvercast  : "с прояснениями"
    ,humidity    : 61
  }
];

class Weather {
  constructor(id) {
    this.weather = document.getElementById(id);
    this.weatherImg = document.querySelector(".weatherImg");
    this.tempMin = document.querySelector(".temp-min");
    this.tempMax = document.querySelector(".temp-max");
    this.isOvercast = document.querySelector(".overcast");
    this.rain = document.querySelector(".rain")
    this.isHeavyRain = document.querySelector(".heavyRain");
    this.humidity = document.querySelector(".humidity");
    this.date = new Date();
    this.getTemperatureToday();
    this.getRainToday();
    this.getHumidityToday();
  }
  getTemperatureToday() {
    this.tempMin.textContent = weather[this.date.getDay()]["tmin"];
    this.tempMax.textContent = weather[this.date.getDay()]["tmax"];
  }
  getRainToday() {
    if (weather[this.date.getDay()]["isRain"]) {
      this.rain.textContent = "возможен";
      this.weatherImg.src = "img/4.gif";
    } else if (weather[this.date.getDay()]["isRain"] && weather[this.date.getDay()]["isOvercast"] == "переменная") {
      this.rain.textContent = "возможен";
      this.weatherImg.src = "img/3.gif";
    } else if (weather[this.date.getDay()]["isRain"] && weather[this.date.getDay()]["isOvercast"] == "с прояснениями") {
      this.rain.textContent = "возможен";
      this.weatherImg.src = "img/5.gif";
    } else if (weather[this.date.getDay()]["isRain"] && weather[this.date.getDay()]["isOvercast"] == "с прояснениями" && weather[this.date.getDay()]["isHeavyRain"]) {
      this.rain.textContent = "возможен";
      this.weatherImg.src = "img/6.gif";
    } else if (!weather[this.date.getDay()]["isRain"]) {
      this.rain.textContent = "не ожидается";
      this.weatherImg.src = "img/2.gif";
    } else if (!weather[this.date.getDay()]["isRain"] && weather[this.date.getDay()]["isOvercast"] == "небольшая") {
      this.weatherImg.src = "img/1.gif";
    } else if (!weather[this.date.getDay()]["isRain"] && weather[this.date.getDay()]["isOvercast"] == "чистое небо") {
      this.weatherImg.src = "img/0.gif";
    }
  }
  getHumidityToday() {
    this.humidity.innerHTML = weather[this.date.getDay()]["humidity"];
  }
}
let weather1 = new Weather("weather");