import { CSS_COLOR_NAMES } from "./colors.js"

const button = document.querySelector('.button')
const body = document.querySelector('body')
const title = document.querySelector('.ChangeColor')

//colors length = 148

button.addEventListener('click', getColor)


function getColor() {
    const randomColor = Math.round(Math.random() * 147)
    body.style.backgroundColor = CSS_COLOR_NAMES[randomColor]
    title.textContent = CSS_COLOR_NAMES[randomColor]
    title.style.color = CSS_COLOR_NAMES[randomColor]
}
