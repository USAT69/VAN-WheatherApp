let x = document.querySelector("#searchkiid");

x.addEventListener("click", (e) => {
    e.preventDefault();

    let city = document.getElementById("Cityji").value;

    console.log(city);

    weather(city);
});

const apiKey = "448ad14b3794bb6ae7cadfa4e99e9485";

let video = document.getElementById("Video");

async function weather(city) {

    let x = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    let dt = await x.json();

    console.log(dt);

    let cc = document.getElementById("JS");

    cc.innerHTML =
        "Temp = " + dt.main.temp + "°C " +
        " | Weather = " + dt.weather[0].description;

    cc.style.color = "rgb(255,125,231)";
    cc.style.backgroundColor = "rgba(0,0,0,0.6)";
    cc.style.fontSize = "25px";
    cc.style.padding = "101px";
    cc.style.borderRadius = "10px";

    cc.style.position = "absolute";
    cc.style.top = "200px";
    cc.style.left = "50%";
    cc.style.transform = "translateX(-50%)";
    cc.style.zIndex = "1000";

    if (dt.weather[0].main == "Rain") {
        video.src = "Rainvideo.mp4";
    }

    else if (dt.weather[0].main == "Clear") {
        video.src = "Clearsky.mp4";
    }

    else if (dt.weather[0].main == "Clouds") {
        video.src = "clouds.mp4";
    }

    else {
        video.src = "haze.mp4";
    }
}
