const calculateTimes = startTime => {
    let html = ''
    let hours = parseInt(startTime.substring(0,2))
    let minutes = parseInt(startTime.substring(2)) + (hours * 60)

    // baseline of 12.5 hours later (full day plus lunch)
    minutes += 750

    for (let i=0; i<6; i++) { // every 15 minutes for 1.5 hours
        console.log(`${12 + (i / 4)} hours: ${formatTime(minutes)}`)
        html += `<h4>${12 + (i / 4)} hours: ${formatTime(minutes)}</h4>`
        html += `${getRoundUp(minutes)}`
        html += `${getRoundDown(minutes)}`

        minutes += 15
    }
    document.getElementById('displayTime').innerHTML = html
}

// ex. for 1935 - should display "1928 - 1935"
const getRoundUp = minutes => `<p class='green'>${formatTime(minutes - 7)} - ${formatTime(minutes)}</p>`

// ex. for 1935 - should display "1935 - 1942"
const getRoundDown = minutes => `<p class='red'>${formatTime(minutes)} - ${formatTime(minutes + 7)}</p>`

const formatTime = minutes => {
    minutes >= 1440 ? minutes -= 1440 : minutes
    const hours = Math.floor(minutes / 60)
    const remainder = minutes % 60
    return `${hours < 10 ? '0'+hours : hours}${remainder < 10 ? '0'+ remainder : remainder}`
}

const initialize = () => {
    document.getElementById('myform').addEventListener('submit', e => {
        e.preventDefault()
        calculateTimes(document.getElementById('startInput').value)
    })
}

initialize()