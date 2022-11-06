const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit');
const error = document.querySelector('.error');
const ago = document.querySelector('.past-or-future');

submitBtn.addEventListener('click', getUserDate);


function getUserDate(){
    //Gets current Date
    const currentDate = new Date();
    const now = new Date();
    now.setHours(0,0,0,0);

    //Gets the users input and converts it to a valid Date
    const userDate = userInput.value;

    if (new Date(userDate) < now) {
        ago.classList.add('active');
    } else {
        ago.classList.remove('active');
    }
    
    // Preventing the function to keep executing if the user does not select a date
    if (userDate.length === 0) {
        error.textContent = "Please select or enter a valid date.";
        return;
    } else {
        error.textContent = "";
    }

    const userDay = parseFloat(userDate.split('-')[2]);
    const userMonth = parseFloat(userDate.split('-')[1]) - 1;
    const userYear = userDate.split('-')[0];
    const passedDate = new Date(userYear, userMonth, userDay);

    //Gets the raw time until the current date til the date the user inputs in milliseconds
    const rawTimeUntil = Math.abs(currentDate - passedDate);

    //Converts the milliseconds to days
    let daysUntil = rawTimeUntil / 1000 / 60 / 60 / 24;

    //Gets the remainder of days and converts it into hours
    let rawHours = daysUntil.toString().split('.')[1];
    let hoursDecimal = '.' + rawHours;
    let hoursUntil = parseFloat(hoursDecimal * 24);

    //Gets the remainder of hours and converts it to minutes
    let rawMinutes = hoursUntil.toString().split('.')[1];
    let minutesDecimal = '.' + rawMinutes;
    let minutesUntil = parseFloat(minutesDecimal * 60);
    
    //Gets the remainder of minutes and converts it to seconds
    let rawSeconds = minutesUntil.toString().split('.')[1];
    let seconsDecimal = '.' + rawSeconds;
    let secondsUntil = parseFloat(seconsDecimal * 60);

    //Actual days as an integer
    daysUntil = daysUntil.toString().split('.')[0];
    hoursUntil = hoursUntil.toString().split('.')[0];
    minutesUntil = minutesUntil.toString().split('.')[0];
    secondsUntil = secondsUntil.toString().split('.')[0];

    function setTime(){
        const days = document.querySelector('.days');
        const hours = document.querySelector('.hours');
        const minutes = document.querySelector('.minutes');
        const seconds = document.querySelector('.seconds');
    
        days.textContent = daysUntil;
        hours.textContent = hoursUntil;
        minutes.textContent = minutesUntil;
        seconds.textContent = secondsUntil;
    }

    setInterval(getUserDate, 1000);
    setTime()
}