let homeScore = 0
let guestScore = 0

document.addEventListener('click', function(e){
    let scoreH = document.getElementById("score-home")
    let scoreG = document.getElementById("score-guest")

    if (e.target.id == 'btn1'){
        homeScore += 1
        scoreH.textContent = homeScore
    }

    if (e.target.id == 'btn2'){
        homeScore += 2
        scoreH.textContent = homeScore
    }

    if (e.target.id == 'btn3'){
        homeScore += 3
        scoreH.textContent = homeScore
    }

    if (e.target.id == 'btn1g'){
        guestScore += 1
        scoreG.textContent = guestScore
    }

    if (e.target.id == 'btn2g'){
        guestScore += 2
        scoreG.textContent = guestScore
    }

    if (e.target.id == 'btn3g'){
        guestScore += 3
        scoreG.textContent = guestScore
    }
})