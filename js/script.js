function updateTime() {

// Tokyo
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTimezone = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTimezone.format("MMMM D, YYYY");
tokyoTimeElement.innerHTML = tokyoTimezone.format("h:mm:ss [<small>]A[</small>]");


// Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTimezone = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTimezone.format("MMMM D, YYYY");
parisTimeElement.innerHTML = parisTimezone.format("h:mm:ss [<small>]A[</small>]");

};

updateTime();
setInterval(updateTime, 1000);