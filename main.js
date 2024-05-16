function getPrayers(){
   
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
// document.write(today);

    
axios.get(`https://api.aladhan.com/v1/calendarByCity/${2024}/${mm}?city=Eindhoven&country=nd&method=2`)
.then(function (response) {
  // handle success

  let actualDay = response.data.data[dd-1];
  console.log(actualDay);
  // Get Date
  let d = document.querySelector(".date")
  console.log(d);
  let date = new Date(actualDay.date.readable);
   d.innerHTML = ``;
   let dayDiv = document.createElement("div");
   dayDiv.innerHTML =  `Today is: <h4 style="color:red">${date.toDateString()}</h4>`;
  d.appendChild(dayDiv);


  // Start Get Country
  // End Get Country

  // Start Get Cit
  // End Get Cit

  // Get Time
  (function () {

      var clockElement = document.getElementById( "clock" );
    
      function updateClock ( clock ) {
        clock.innerHTML = new Date().toLocaleTimeString();
      }
    
      setInterval(function () {
          updateClock( clockElement );
      }, 1000);
    
    }());
  // end get Time


  // Start Date In Hijri
  let hdate = document.querySelector(".hijri")
  let hday = actualDay.date.hijri.date;
  let hdiv = document.createElement("div");
  hdiv.innerHTML +=  ` <h4 style="color:red"> ${hday}</h4>`;
  hdate.appendChild(hdiv);
  
  // End Date In Hijri

  // Start Math way
  let mathWay = document.querySelector(".way")
  let mathWayCenter = actualDay.meta.method.name;
  let mathWayDiv = document.createElement("div");
  mathWayDiv.innerHTML +=  ` <h4 style="color:red"> ${mathWayCenter}</h4>`;
  mathWay.appendChild(mathWayDiv);
  // End Math way

  // Start latitude 
  let latitude = document.querySelector(".latitude")
  let latitudeCalc = actualDay.meta.latitude;
  let latitudeDiv = document.createElement("div");
  latitudeDiv.innerHTML +=  ` <h4 style="color:red"> ${latitudeCalc}</h4>`;
  latitude.appendChild(latitudeDiv);
  // End latitude


  // Start Longitude
  let longitude = document.querySelector(".longitude")
  let longitudeCalc = actualDay.meta.longitude;
  let longitudeDiv = document.createElement("div");
  longitudeDiv.innerHTML +=  ` <h4 style="color:red"> ${longitudeCalc}</h4>`;
  longitude.appendChild(longitudeDiv);
  // End Longitude


  // Start Timezone
  let timeZone = document.querySelector(".timeZone")
  let timeZoneCalc = actualDay.meta.timezone;
  let timeZoneDiv = document.createElement("div");
  timeZoneDiv.innerHTML +=  ` <h4 style="color:red"> ${timeZoneCalc}</h4>`;
  timeZone.appendChild(timeZoneDiv);
  // End Timezone


  // Start Fajr Prayer 
  let f = document.querySelector(".fajr")
  let fajrTime = actualDay.timings.Fajr;
  let fajrdiv = document.createElement("div");
  fajrdiv.innerHTML +=  ` <h4 style="color:red"> ${fajrTime}</h4>`;
  f.appendChild(fajrdiv);
  // Start Fajr Prayer 

  // Start Sunrise Prayer 
  let s = document.querySelector(".sunrise")
  let sunriseTime = actualDay.timings.Sunrise;
  let sunriseDiv = document.createElement("div");
  sunriseDiv.innerHTML +=  ` <h4 style="color:red"> ${sunriseTime}</h4>`;
  s.appendChild(sunriseDiv);
  // Start Sunrise Prayer 

  // Start Dhuhr Prayer 
  let dh = document.querySelector(".dhuhr")
  let dhuhrTime = actualDay.timings.Dhuhr;
  let duhurDiv = document.createElement("div");
  duhurDiv.innerHTML +=  ` <h4 style="color:red"> ${dhuhrTime}</h4>`;
  dh.appendChild(duhurDiv);
  // Start Dhuhr Prayer 

  // Start Asr Prayer 

  let a = document.querySelector(".asr")
  let asrTime = actualDay.timings.Asr;
  let div4 = document.createElement("div");
  div4.innerHTML +=  ` <h4 style="color:red"> ${asrTime}</h4>`;
  a.appendChild(div4);
  // End  Asr Prayer 


 // start Maghrib Prayer

  let m = document.querySelector(".maghrib")
  let maghribTime = actualDay.timings.Maghrib;

   
   let div3 = document.createElement("div");
  div3.innerHTML +=  ` <h4 style="color:red">${maghribTime}</h4>`;
  m.appendChild(div3);


  // end  Maghrib Prayer


  // Start Isha Prayer 
  let isha = document.querySelector(".isha")
  let ishaTime = actualDay.timings.Isha;
  let ishaDiv = document.createElement("div");
  ishaDiv.innerHTML +=  ` <h4 style="color:red"> ${ishaTime}</h4>`;
  isha.appendChild(ishaDiv);
  // Start Isha Prayer 

})
.catch(function (error) {
  // handle error
  // console.log(error);
})
.finally(function () {
  // always executed
});
}


getPrayers()