const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', getUserDate);

function getUserDate(){
    //Gets current Date
    const currentDate = new Date();

    //Gets the users input and converts it to a valid Date
    const userDate = userInput.value;
    const userDay = parseFloat(userDate.split('-')[2]);
    const userMonth = parseFloat(userDate.split('-')[1]) - 1;
    const userYear = userDate.split('-')[0];
    const passedDate = new Date(userYear, userMonth, userDay);

    //Gets the raw time until the current date til the date the user inputs in milliseconds
    const rawTimeUntil = Math.abs(currentDate - passedDate);

    //Converts the milliseconds to days
    let daysUntil = rawTimeUntil / 1000 / 60 / 60 / 24;

    //Gets the remainder od days and converts it into hours
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
    console.log(daysUntil)
    console.log(hoursUntil);
    console.log(minutesUntil);

    function setTime(){
        const days = document.querySelector('.days');
        const hours = document.querySelector('.hours');
        const minutes = document.querySelector('.minutes');
        const seconds = document.querySelector('.seconds');
    
        days.textContent = daysUntil;
        hours.textContent = hoursUntil;
        minutes.textContent = minutesUntil;
        seconds.textContent = secondsUntil;
        console.log('asdasd')
    }

    setInterval(getUserDate, 1000);
    setTime()
}