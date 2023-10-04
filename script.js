let weathercon = document.getElementById("weathercon");

const tempStatus = "Sunny";

if (tempStatus === "Sunny") {
    weathercon.innerHTML = "<i class='fa-solid fa-sun' style='color:#fcf403; font-size:100px;'></i>";
} else if (tempStatus === "Clouds") {
    weathercon.innerHTML = "<i class='fa-solid fa-cloud' style='color:#fff; font-size:100px;'></i>";
} else if (tempStatus === "Rain") {
    weathercon.innerHTML = "<i class='fa-solid fa-cloud-moon-rain' style='color:#03c2fc; font-size:100px;'></i>";
}

const curDate = document.getElementById("date");

const getCurrentDay = () => {
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = new Date();
    // console.log(weekday[currentDay.getDay()]);
    let day = weekday[currentDay.getDay()];
    return day;
}
// getCurrentDay();

const getCurrentTime = () => {
    var months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var currentTime = new Date();
    var month = months[currentTime.getMonth()];
    var date = currentTime.getDate();

    let hours = currentTime.getHours();
    let mins = currentTime.getMinutes();
    let periods = "AM";

    if (hours > 11) {
        periods = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    // console.log(month + " " + date +" " + hours+":"+mins+periods);

    return `${month} ${date} | ${hours}:${mins}${periods}`;
}
// getCurrentTime();
getCurrentTime();
setInterval(getCurrentTime, 1000);

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();
