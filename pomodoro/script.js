// JavaScript kodları
document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const resetButton = document.querySelector('.reset');
    const shortBreakButton = document.querySelector('.short-break');
    const longBreakButton = document.querySelector('.long-break');
    const timerDisplay = document.querySelector('.timer-display'); // Süreyi gösterecek HTML elemanı

    let intervalId = null;
    let timeLeft = 25 * 60; // Başlangıçta 25 dakika

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
    shortBreakButton.addEventListener('click', () => setTimeForBreak(5)); // 5 dakika mola
    longBreakButton.addEventListener('click', () => setTimeForBreak(15)); // 15 dakika mola

    function startTimer() {
        
        if (!intervalId) {
            intervalId = setInterval(() => {
                timeLeft--;
                updateDisplay();
                if (timeLeft <= 0) {
                    clearInterval(intervalId);
                    intervalId = null;
                    alert("Time is up!");
                }
            }, 1000);
        }
    }

    function stopTimer() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function resetTimer() {
        stopTimer();
        timeLeft = 25 * 60; // Süreyi 25 dakika olarak sıfırla
        updateDisplay();
    }

    function setTimeForBreak(minutes) {
        stopTimer();
        timeLeft = minutes * 60;
        updateDisplay();
    }

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Sayfa yüklendiğinde zamanlayıcıyı güncelle
    updateDisplay();
});


