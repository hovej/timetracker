const calculateTimes = startTime => {
    let html = ''
    let hours = parseInt(startTime.substring(0,2))
    let minutes = parseInt(startTime.substring(2))

    // baseline of 12.5 hours later (full day plus lunch)
    hours += 12
    minutes += 30

    if (minutes >= 60) {
        minutes -= 60
        hours++
    }

    for (let i=0; i<6; i++) { // every 15 minutes for 2 hours
        console.log(`${12 + (i / 4)} hours: ${formatTime(hours, minutes)}`)
        html += `<h4>${12 + (i / 4)} hours: ${formatTime(hours, minutes)}</h4>`
        html += `${getRoundUp(hours, minutes)}`
        html += `${getRoundDown(hours, minutes)}`
        // document.getElementById('displayTime').innerHTML += `<p>${12 + (i / 4)} hours: ${formatTime(hours, minutes)}</p>`

        minutes += 15
        if (minutes >= 60) {
            minutes -= 60
            hours++
        }
    }
    document.getElementById('displayTime').innerHTML = html
}

// ex. for 1935 - should display "1928 - 1935"
const getRoundUp = (hours, minutes) => {
    let newHours = hours
    let newMinutes = minutes

    newMinutes -= 7
    if (newMinutes < 0) {
        newMinutes += 60
        newHours--
    }

    return `<p class='green'>${formatTime(newHours, newMinutes)} - ${formatTime(hours, minutes)}</p>`
}

// ex. for 1935 - should display "1935 - 1942"
const getRoundDown = (hours, minutes) => {
    let newHours = hours
    let newMinutes = minutes

    newMinutes += 7
    if (newMinutes >= 60) {
        newMinutes -= 60
        newHours++
    }

    return `<p class='red'>${formatTime(hours, minutes)} - ${formatTime(newHours, newMinutes)}</p>`
}

const formatTime = (hours, minutes) => {
    return `${hours < 10 ? '0'+hours : hours}${minutes < 10 ? '0'+minutes : minutes}`
}

const initialize = () => {
    document.getElementById('myform').addEventListener('submit', e => {
        e.preventDefault()
        calculateTimes(document.getElementById('startInput').value)
    })
}

initialize()