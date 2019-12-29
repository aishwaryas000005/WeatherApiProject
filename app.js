var search = document.getElementById("search");
//events
search.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        var getCityName = e.target.value;
    } 
    getWeather(getCityName);    
});

function getWeather(getCityName) {
    const weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=4fafe8bae28208034f018d408e6bd9f2`;
    window
    .fetch(weatherApi)
    .then(data => {
        data.json()
        .then(weather => {
            var output = "";
            console.log(weather);
            console.log(weather.coord.lon);
            console.log(weather.coord.lat);
            //array here
            var weatherData = weather.weather;
            for(let x of weatherData) {
                output += `
                <div class="col-md-4 offset-4 mt-4 card">
                <div class="card-body">
                    <h1>${weather.name}</h1>
                    <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png" /></span>
                    <p><span>temp:</span>
                    <span class="temp">${weather.main.temp} &deg;c</span></p>
                    <p class="des float-left">${x.description}</p>
                    <p class="des float-right">${x.main}</p>

                </div?
                </div>
                `;
                document.getElementById("template").innerHTML = output;
                
                /* console.log(x);
                console.log(x.id);
                console.log(x.main);
                console.log(x.description);
                console.log(x.icon); */
            }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
    };

    document.getElementById("search");
