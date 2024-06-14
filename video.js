const fon = document.getElementById('fon')
const center_bar = document.getElementById('center-bar')
let strim = false
fon.pause()


center_bar.addEventListener('click', () => {
    let time = new Date().getDate()
    if(strim === false){
        fon.play()
        strim = true
    }
    setTimeout(() => {

        let new_time = new Date().getTime()
        if(new_time - time > 1000){
            fon.pause()
            strim = false
        }   
    },1000)
})
