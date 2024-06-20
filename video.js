const fon = document.getElementById('fon')
const center_bar = document.getElementById('center-bar')
const edge_bar = document.querySelectorAll('.edge-bar')
const container = document.querySelector('.container')
let strim = false
fon.pause()

setInterval(() => {
    if(!strim){
        // edge_bar.forEach(element => {
        //     element.style.backgroundColor = 'rgba(10, 90, 200, 0.1)'
        //     element.style.opacity = 0
        // })
        container.style.backgroundColor = 'rgba(0, 0, 0, 1)'
        setTimeout(() => {
            fon.pause()
        },350)
    }
    else{
        fon.play()
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
        strim = false
    }
},500)

center_bar.addEventListener('click', () => {
    edge_bar.forEach(element => {
        element.classList.add('edge-bar-run')
    })
    strim = true
    fon.play()
})

