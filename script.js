const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const dateDisplay = document.getElementById('date');
const currentDate = new Date();
const options = {year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.textContent = currentDate.toLocaleDateString('en-US', options);

setInterval(function() {
    const date = new Date()
    hours.textContent = date.getHours()
    minutes.textContent = date.getMinutes()
    seconds.textContent = date.getSeconds()
    dateDisplay.textContent = date.toLocaleDateString()
}, 1000)