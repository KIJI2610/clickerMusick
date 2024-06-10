let price = {
    clickPlus1: (localStorage.getItem('clickPlus1') === null)?(100):(Number(localStorage.getItem('clickPlus1'))),
    clickAuto1: (localStorage.getItem('clickAuto1') === null)?(300):(Number(localStorage.getItem('clickAuto1'))),
    clickPlus2: (localStorage.getItem('clickPlus2') === null)?(600):(Number(localStorage.getItem('clickPlus2'))),
    clickAuto2: (localStorage.getItem('clickAuto2') === null)?(1000):(Number(localStorage.getItem('clickAuto2'))),
    clickPlus3: (localStorage.getItem('clickPlus3') === null)?(2500):(Number(localStorage.getItem('clickPlus3'))),
    clickAuto3: (localStorage.getItem('clickAuto3') === null)?(2500):(Number(localStorage.getItem('clickAuto3'))),
}


const clicck1_price = document.getElementById('clicck1-price')
const clicck2_price = document.getElementById('clicck2-price')
const clicck3_price = document.getElementById('clicck3-price')
const auto1_price = document.getElementById('auto1-price')
const auto2_price = document.getElementById('auto2-price')
const auto3_price = document.getElementById('auto3-price')

