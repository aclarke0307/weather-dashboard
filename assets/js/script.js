 document.querySelector("form").addEventListener("submit",function(e){
   e.preventDefault();
   var searchedCity =document.getElementById("searchCity").value;
   console.log(searchedCity);

   fetch('http://api.openweathermap.org/data/2.5/weather?q='+searchedCity+'&APPID=f2282ab08d953c2ff58c683d42d09c9a')
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
        });

 })