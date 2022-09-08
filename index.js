let scoreH = document.getElementById("score-home")
let scoreG = document.getElementById("score-guest")
let homeScore = 0
let guestScore = 0

/* HOME SCORE FUNCTIONS */
function increment1() {
    homeScore += 1
    scoreH.textContent = homeScore
    
}

function increment2() {
    homeScore += 2
    scoreH.textContent = homeScore
    
}

function increment3() {
    homeScore += 3
    scoreH.textContent = homeScore
    
}

/* GUEST SCORE FUNCTIONS */
function increment1g() {
    guestScore += 1
    scoreG.textContent = guestScore
    
}

function increment2g() {
    guestScore += 2
    scoreG.textContent = guestScore
    
}

function increment3g() {
    guestScore += 3
    scoreG.textContent = guestScore
    
}