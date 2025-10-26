let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let count = 0
function addOneHome()
{
    count+=1

    homeScore.innerText =  count
}

function addTwoHome()
{
    count+=2

    homeScore.innerText =  count
}

function addThreeHome()
{
    count+=3

    homeScore.innerText =  count
}



// //////////////////////////////////////
let countGuest=0
function addOneGuest()
{
    countGuest+=1

    guestScore.innerText =  countGuest
}

function addTwoGuest()
{
    countGuest+=2

    guestScore.innerText =  countGuest
}

function addThreeGuest()
{
    countGuest+=3

    guestScore.innerText =  countGuest
}



// ///////////////////////
// new game 

function newGame()
{
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}