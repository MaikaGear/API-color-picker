const colorInput = document.getElementById('color-picker')

colorInput.addEventListener('change', ()=>{
    apiRequest(colorInput.value.slice(-1))
})

function apiRequest(hexVal){
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexVal}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.colors)
        })
}