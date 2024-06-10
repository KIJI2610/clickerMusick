const count = document.getElementById('count')

const fon = document.getElementById('fon')
let countNum = (localStorage.getItem('countNum') === null)?(0):Number(localStorage.getItem('countNum'))
let UpCount = (localStorage.getItem('UpCount') === null)?(10):Number(localStorage.getItem('UpCount'))
const noMoney = 'Не достаточно средств'

function tap(){
    countNum += UpCount
    localStorage.setItem('countNum', countNum)
    count.textContent = countNum
}

function BuyBonus(bonus){
    switch (bonus) {
        case '+1':
            if(countNum >= price.clickPlus1){
                countNum -= price.clickPlus1; count.textContent = countNum
                UpCount++; localStorage.setItem('UpCount', UpCount);
                price.clickPlus1 = price.clickPlus1 * 2; localStorage.setItem('clickPlus1', price.clickPlus1)
                clicck1_price.textContent = price.clickPlus1
            } else {
                clicck1_price.textContent = noMoney
                setTimeout(() => {clicck1_price.textContent = price.clickPlus1}, 1000)
            }
            break;
        
        case '+1auto':
            
            break;
        default:
            break;
    }
}
