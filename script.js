// const apiKey = da6b0ab331cfd80764c24e895c01fbed;



// var res = fetch(url);
// console.log(res);
// res.then((data)=>data.json()).then((data1)=>{console.log(data1)}).catch((err)=>{console.log(err)});



const container =document.createElement('div');
container.setAttribute("class","container");
container.innerHTML=`<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                        <div class="container-fluid">
                           <a class="navbar-brand " href="#">Weather Report </a>
                        </div>
                     </nav>
                         <div class="container input-group mb-3 mt-5 w-50">
                          <span class="input-group-text" id="basic-addon1">Enter CityName</span>
                          <input id="cityName" type="text" class="form-control" placeholder="CityName" aria-label="Username" aria-describedby="basic-addon1">
                        </div>

                        <div class="d-grid gap-2 col-2 mx-auto p-4">
                            <button class="btn btn-info" type="button" onclick="cityWeather()">Submit</button>
                        </div>

                        <div id="weatherContainer" class="container card mb-3 mt-5 p-0" style="max-width: 540px;">
           
                        </div>`;


document.body.append(container);

async function cityWeather(){



    var cityName = document.getElementById('cityName').value 
    console.log(cityName);
    
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=da6b0ab331cfd80764c24e895c01fbed`);
    console.log(weather);
    let result = await weather.json();
    console.log(result); 
   
    var weatherContainer = document.getElementById('weatherContainer');
    weatherContainer.innerHTML=`<div class="row g-0">
    <div class="col-md-4">
      <img src="https://media.istockphoto.com/vectors/vectot-weather-widget-for-smartphone-vector-id475696742?k=6&m=475696742&s=612x612&w=0&h=UFFoG4LnltIDFv3PSvGAQPV8CPHpoqTkZsgs8QDas0Q=" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Weather Data :-<span> ${cityName.toUpperCase()} </span> </h5>
        <p class="card-text"><small class="text-muted">Temperature:${result.main.temp}</small></p>
        <p class="card-text"><small class="text-muted">Weatherid:${result.weather[0].id}</small></p>
        <p class="card-text"><small class="text-muted">Humidity:${result.main.humidity}</small></p>
      </div>
    </div>
    </div>`
    
}





