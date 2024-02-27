let startTime;
let elapsedTime = 0;
let isRunning = false;
let lapCounter = 1;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        updateDisplay();
        setInterval(updateDisplay, 1000);
    }
}

function pauseStopwatch() {
    if (isRunning) {
        isRunning = false;
        elapsedTime = Date.now() - startTime;
    }
}

function resetStopwatch() {
    isRunning = false;
    elapsedTime = 0;
    lapCounter = 1;
    updateDisplay();
    document.getElementById('lapList').innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById('lapList').appendChild(lapItem);
        lapCounter++;
    }
}

function updateDisplay() {
    const currentTime = isRunning ? Date.now() - startTime + elapsedTime : elapsedTime;
    document.getElementById('display').textContent = formatTime(currentTime);
}

function formatTime(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}
