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

function apiRequest(hexVal){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexVal}&mode=${colorDropdown.value}`)
        .then(res => res.json())
        .then(data => {
            const colorData = data.colors
            colorData.forEach((color, index)=>{
                changeColor(index, color.hex.value)
            })
        })
}

function changeColor(pos, val){
    if(pos === 0){
        colorOne.style.backgroundColor = `${val}`
        colorOne.innerHTML = `<span id='color-one'>${val}</span>`
        if(val[1] <= 3){
            colorOne.style.color = 'white'
        }
    } else if(pos === 1){
        colorTwo.style.backgroundColor = `${val}`
        colorTwo.innerHTML = `<span id='color-two'>${val}</span>`
        if(val[1] <= 3){
            colorTwo.style.color = 'white'
        }
    } else if(pos === 2){
        colorThree.style.backgroundColor = `${val}`
        colorThree.innerHTML = `<span id='color-three'>${val}</span>`
        if(val[1] <= 3){
            colorThree.style.color = 'white'
        }
    } else if(pos === 3){
        colorFour.style.backgroundColor = `${val}`
        colorFour.innerHTML = `<span id='color-four'>${val}</span>`
        if(val[1] <= 3){
            colorFour.style.color = 'white'
        }
    } else if(pos === 4){
        colorFive.style.backgroundColor = `${val}`
        colorFive.innerHTML = `<span id='color-five'>${val}</span>`
        if(val[1] <= 3){
            colorFive.style.color = 'white'
        }
    }
}

function handleGetBtn(){
    const userInput = colorInput.value.replace('#', '')
    apiRequest(userInput)
    removeAttributes()
}

function handleColorClick(color) {
        const val = color.textContent
        navigator.clipboard.writeText(val);
        color.innerHTML = `<span>Copied!</span>`
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