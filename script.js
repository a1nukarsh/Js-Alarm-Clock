console.log("This is alarm clock")

const alarmSubmit = document.getElementById('alarmSubmit')
alarmSubmit.addEventListener('click', setAlarm)
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault()
    const alarm = document.getElementById('alarm')
    alarmDate = new Date(alarm.value)
    console.log(`Setting an alarm for ${alarmDate}`)
    now = new Date()

    timetoAlarm = alarmDate - now
    console.log(timetoAlarm)
    if(timetoAlarm>=0){
        setTimeout(() => {
            console.log("Ringing Now")
            ringBell()
        }, timetoAlarm);
    }

}
