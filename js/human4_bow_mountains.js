const screens = document.querySelectorAll('.screen');
const choose_goblin_btns = document.querySelectorAll('.choose-goblin-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_goblin = {}


start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_goblin_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_goblin = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createGoblin, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createGoblin() {
    const goblin = document.createElement('div')
    goblin.classList.add('goblin')
    const { x, y } = getRandomLocation()
    goblin.style.top = `${y}px`
    goblin.style.left = `${x}px`
    goblin.innerHTML = `<img src="${selected_goblin.src}" alt="${selected_goblin.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    goblin.addEventListener('click', shootGoblin)

    game_container.appendChild(goblin)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function shootGoblin() {
    increaseScore()
    this.classList.add('shot')
    setTimeout(() => this.remove(), 2000)
    addGoblins()
    shootSound().play
}

function addGoblins() {
    setTimeout(createGoblin, 1000)
    setTimeout(createGoblin, 1500)
}

function increaseScore() {
    score++
    if(score > 20) {
        message.classList.add('visible')
        cave.classList.add('visible')

    }
    scoreEl.innerHTML = `Score: ${score}`
}
