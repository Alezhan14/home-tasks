import "../scss/main.scss"

class Timer {
    constructor(timer, buttonStart, buttonStop, buttonSet) {
        this.element = document.querySelector(timer);
        this.buttonStart = document.querySelector(buttonStart);
        this.buttonStop = document.querySelector(buttonStop);
        this.buttonSet = document.querySelector(buttonSet);
        this.minutes = 0;
        this.seconds = 0;
        this.intervalID = null;
    }

    askTime() {
        this.time = prompt ('Enter time in format: 23:45');
        this.minutes = this.time.split(':')[0];
        this.seconds = this.time.split(':')[1];
    }

    validation() {
        return !(this.minutes == 0 && this.seconds == 0 ||
            this.minutes < 0 || this.minutes >= 59 ||
            this.seconds < 0 || this.seconds > 59 ||
            typeof this.minutes === 'undefined' || typeof this.seconds == 'undefined');
    }

    showTime() {
        this.element.textContent = `${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;

    }

    setTime() {
        this.buttonSet.addEventListener('click', (event) => {
            clearInterval(this.intervalID);
            this.askTime();

            if (this.validation()) {
                this.showTime();
                this.startTimer();
            } else {
                alert('Wrong time format!');
            }
        });
    }

    startTimer() {
        this.buttonStart.addEventListener('click', (event) => {
            this.intervalID = setInterval(() => {
                if(this.seconds === 0 && this.minutes === 0) {
                    clearInterval(this.intervalID);
                } else if(this.seconds === 0) {
                    this.seconds = 59;
                    this.minutes--;
                } else if(this.seconds > 0) {
                    this.seconds--;
                }
                this.showTime()
            }, 1000);

            this.buttonStart.disabled = true;
        });
    }

    stopTimer() {
        this.buttonStop.addEventListener('click', (event) => {
            clearInterval(this.intervalID);

            this.buttonStart.disabled = false;
        });

    }
}

let myTimer = new Timer('.timer', '.button-start', '.button-stop', '.button-set')
myTimer.setTime();
myTimer.stopTimer();
