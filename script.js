const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "95f423fdb5msh051b3cfaabb2d16p1ba442jsn19ec2ad6eaae",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      cloud_pct.innerHTML = response.cloud_pct;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");
//Delhi
const getWeather1 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
temp_Delhi.innerHTML = response.temp;
      feels_like_Delhi.innerHTML = response.feels_like;
      humidity_Delhi.innerHTML = response.humidity;
      wind_speed_Delhi.innerHTML = response.wind_speed;
      sunrise_Delhi.innerHTML = response.sunrise;
      sunset_Delhi.innerHTML = response.sunset;
            cloud_pct_Delhi.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather1("Delhi");
//Mumbai
const getWeather2 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp_Mumbai.innerHTML = response.temp;
      feels_like_Mumbai.innerHTML = response.feels_like;
      humidity_Mumbai.innerHTML = response.humidity;
      wind_speed_Mumbai.innerHTML = response.wind_speed;
      sunrise_Mumbai.innerHTML = response.sunrise;
      sunset_Mumbai.innerHTML = response.sunset;
      cloud_pct_Mumbai.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather2("Mumbai");
//Jaipur
const getWeather3 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp_Jaipur.innerHTML = response.temp;
      feels_like_Jaipur.innerHTML = response.feels_like;
      humidity_Jaipur.innerHTML = response.humidity;
      wind_speed_Jaipur.innerHTML = response.wind_speed;
      sunrise_Jaipur.innerHTML = response.sunrise;
      sunset_Jaipur.innerHTML = response.sunset;
      cloud_pct_Jaipur.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather3("Jaipur");
//Moradabad
const getWeather4 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Moradabad",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp_Moradabad.innerHTML = response.temp;
      feels_like_Moradabad.innerHTML = response.feels_like;
      humidity_Moradabad.innerHTML = response.humidity;
      wind_speed_Moradabad.innerHTML = response.wind_speed;
      sunrise_Moradabad.innerHTML = response.sunrise;
      sunset_Moradabad.innerHTML = response.sunset;
      cloud_pct_Moradabad.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather4("Moradabad");
//Oymyakon
const getWeather5 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Oymyakon",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp_Oymyakon.innerHTML = response.temp;
      feels_like_Oymyakon.innerHTML = response.feels_like;
      humidity_Oymyakon.innerHTML = response.humidity;
      wind_speed_Oymyakon.innerHTML = response.wind_speed;
      sunrise_Oymyakon.innerHTML = response.sunrise;
      sunset_Oymyakon.innerHTML = response.sunset;
      cloud_pct_Oymyakon.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather5("Oymyakon");
//Bangalore
const getWeather6 = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp_Bangalore.innerHTML = response.temp;
      feels_like_Bangalore.innerHTML = response.feels_like;
      humidity_Bangalore.innerHTML = response.humidity;
      wind_speed_Bangalore.innerHTML = response.wind_speed;
      sunrise_Bangalore.innerHTML = response.sunrise;
      sunset_Bangalore.innerHTML = response.sunset;
      cloud_pct_Bangalore.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather6("Bangalore");