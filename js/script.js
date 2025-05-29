function updateTime() {

// Tokyo
let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) {
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTimezone = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTimezone.format("MMMM D, YYYY");
tokyoTimeElement.innerHTML = tokyoTimezone.format("h:mm:ss [<small>]A[</small>]");
}

// Nairobi
let nairobiElement = document.querySelector("#nairobi");
if (nairobiElement) {
let nairobiDateElement = nairobiElement.querySelector(".date");
let nairobiTimeElement = nairobiElement.querySelector(".time");
let nairobiTimezone = moment().tz("Africa/Nairobi");

nairobiDateElement.innerHTML = nairobiTimezone.format("MMMM D, YYYY");
nairobiTimeElement.innerHTML = nairobiTimezone.format("h:mm:ss [<small>]A[</small>]");
}

// Honolulu
let honoluluElement = document.querySelector("#honolulu");
if (honoluluElement) {
let honoluluDateElement = honoluluElement.querySelector(".date");
let honoluluTimeElement = honoluluElement.querySelector(".time");
let honoluluTimezone = moment().tz("Pacific/Honolulu");

honoluluDateElement.innerHTML = honoluluTimezone.format("MMMM D, YYYY");
honoluluTimeElement.innerHTML = honoluluTimezone.format("h:mm:ss [<small>]A[</small>]");
}

};

function updateCity(event) {
  setInterval(function() {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(" A")}</small></div>
  </div>
  <a href="/">All cities</a>`
  }, 1000);
};

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);