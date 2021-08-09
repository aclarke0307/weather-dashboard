var button = document.querySelector(".button")
var inputValue = document.querySelector(".inputValue")
var nameEl = document.querySelector(".name");
var temp =document.querySelector(".temp");
var humidity =document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var listCity =document.querySelector(".list-city");



button.addEventListener("click", function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=f2282ab08d953c2ff58c683d42d09c9a')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var humidityValue = data['main']['humidity'];
        var windValue = data['wind']['speed'];
        

        nameEl.innerHTML = nameValue;
        temp.innerHTML ="Temp:" + " " + tempValue + "Degrees Fahrenheit";
        humidity.innerHTML = "Humidity:" + " "+ humidityValue;
        wind.innerHTML = "Wind:" + " "+ windValue + "MPH";
        
    
    })
   .catch(err => alert("No City Found!"))

});

localStorage.getItem('value');
