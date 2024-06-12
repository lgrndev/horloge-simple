const heure = document.getElementById("heure")

const date = document.getElementById("date")

const jour = document.getElementById("jour")




function updateClock() {
    const currentTime = dayjs().format('HH : mm : ss')
    heure.textContent = currentTime
    const currentDate = dayjs().format('DD/MM/YYYY')
    date.textContent = currentDate
    const currentJour = dayjs().format('dddd')
    jour.textContent = currentJour
}


setInterval(updateClock ,1000)