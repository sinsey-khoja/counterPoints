const players = [
  'Alisher',
  'Jasur',
  'Xudoyorxon',
  'Bahrom'
]

let playerName = document.querySelectorAll('.player-name')

let pointAddOne = document.querySelector('.player-one')
let pointAddTwo = document.querySelector('.player-two')

let stPoint = document.querySelector('.st-player-point')
let ndPoint = document.querySelector('.nd-player-point')

playerName[0].innerHTML = players[2]
playerName[1].innerHTML = players[3]

pointAddOne.addEventListener('click', ()=> {
  if(stPoint.innerHTML >= 10 || stPoint.innerHTML == 5 && ndPoint.innerHTML == 0 || stPoint.innerHTML == 6 && ndPoint.innerHTML == 1) {
    stPoint.innerHTML = 'WINNER'
    ndPoint.innerHTML = 'LOSER' 
  } else if (!isNaN(stPoint.innerHTML)){
   stPoint.innerHTML = +stPoint.innerHTML + 1 
  }
})
pointAddTwo.addEventListener('click', ()=> {
  if(ndPoint.innerHTML >= 10 || ndPoint.innerHTML == 5 && stPoint.innerHTML == 0 || ndPoint.innerHTML == 6 && stPoint.innerHTML == 1) {
    ndPoint.innerHTML = 'WINNER'
    stPoint.innerHTML = 'LOSER' 
  } else if (!isNaN(ndPoint.innerHTML)){
    ndPoint.innerHTML = +ndPoint.innerHTML + 1
  }
})
