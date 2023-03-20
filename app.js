const colorInput = document.getElementById('color-picker')
const getBtn = document.getElementById('get-btn')
const colorOne = document.querySelector('.color-one')
const colorTwo = document.querySelector('.color-two')
const colorThree = document.querySelector('.color-three')
const colorFour = document.querySelector('.color-four')
const colorFive = document.querySelector('.color-five')
const option = document.querySelectorAll('option')
const colorDropdown = document.getElementById('color-dropdown');

window.addEventListener('click', (e)=>{
    if(e.target.id === 'get-btn'){
        handleGetBtn()
    } else if(e.target.id === 'color-one'){
        handleColorClick(colorOne)
    } else if(e.target.id === 'color-two'){
        handleColorClick(colorTwo)
    } else if(e.target.id === 'color-three'){
        handleColorClick(colorThree)
    } else if(e.target.id === 'color-four'){
        handleColorClick(colorFour)
    } else if(e.target.id === 'color-five'){
        handleColorClick(colorFive)
    }
})

function apiRequest(){
    return fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.replace('#', '')}&mode=${colorDropdown.value}`, {method: "GET"})
        .then(res => res.json())
        .then(data => data.colors)
}

function changeColor(pos, val){
    if(pos === 0){
        colorOne.style.backgroundColor = `${val}`
        colorOne.innerHTML = `<span id='color-one'>${val}</span>`
    } else if(pos === 1){
        colorTwo.style.backgroundColor = `${val}`
        colorTwo.innerHTML = `<span id='color-two'>${val}</span>`
    } else if(pos === 2){
        colorThree.style.backgroundColor = `${val}`
        colorThree.innerHTML = `<span id='color-three'>${val}</span>`
    } else if(pos === 3){
        colorFour.style.backgroundColor = `${val}`
        colorFour.innerHTML = `<span id='color-four'>${val}</span>`
    } else if(pos === 4){
        colorFive.style.backgroundColor = `${val}`
        colorFive.innerHTML = `<span id='color-five'>${val}</span>`
    }
}

function handleGetBtn(){
    apiRequest().then(data => {
        data.forEach((color, index)=>{
            changeColor(index, color.hex.value)
        })
    })
    removeAttributes()
}

function handleColorClick(color) {
        const val = color.textContent
        navigator.clipboard.writeText(val);
        color.innerHTML = `<span id=${color.id}>Copied!</span>`
        setTimeout(()=>{
            color.innerHTML = `<span id=${color.id}>${val}</span>`
        }, 2000)
}

function removeAttributes(){
    colorOne.removeAttribute('hidden')
    colorTwo.removeAttribute('hidden')
    colorThree.removeAttribute('hidden')
    colorFour.removeAttribute('hidden')
    colorFive.removeAttribute('hidden')
}