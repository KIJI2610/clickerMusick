const fon = document.getElementById('fon')
const center_bar = document.getElementById('center-bar')
const edge_bar = document.querySelectorAll('.edge-bar')
const container = document.querySelector('.container')
let strim = false
fon.pause()

setInterval(() => {
    if(!strim){
        edge_bar.forEach(element => element.style.backgroundColor = 'rgba(10, 90, 200, 0.1)')
        container.style.backgroundColor = 'rgba(0, 0, 0, 1)'
        setTimeout(() => {
            fon.pause()
        },1050)
    }
    else{
        fon.play()
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
        strim = false
    }
},1500)

center_bar.addEventListener('click', () => {
    edge_bar.forEach(element => element.style.backgroundColor = 'rgba(100, 100, 200, 0.3)')
    strim = true
    fon.play()
})

