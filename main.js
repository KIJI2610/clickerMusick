const count = document.getElementById('count')

let countNum = (localStorage.getItem('countNum') === null)?(0):Number(localStorage.getItem('countNum'))
let UpCount = (localStorage.getItem('UpCount') === null)?(1):Number(localStorage.getItem('UpCount'))
let UpCountAuto = (localStorage.getItem('UpCountAuto') === null)?(0):Number(localStorage.getItem('UpCountAuto'))

const noMoney = 'Не достаточно средств'

function tap(){
    countNum += UpCount
    localStorage.setItem('countNum', countNum)
    count.textContent = countNum

}


function autoTap(){
    countNum += UpCountAuto
    if(localStorage.getItem('countNum') !== null){
        localStorage.setItem('countNum', countNum)
    }
    count.textContent = countNum

}
setInterval(autoTap, 1000)

function BuyBonus(bonus){
    switch (bonus) {
        case '+1':
            if(countNum >= price.clickPlus1){
                countNum -= price.clickPlus1; count.textContent = countNum
                localStorage.setItem('countNum', countNum)
                UpCount++; localStorage.setItem('UpCount', UpCount);
                price.clickPlus1 = price.clickPlus1 * 2; localStorage.setItem('clickPlus1', price.clickPlus1)
                clicck1_price.textContent = price.clickPlus1
            } else {
                clicck1_price.textContent = noMoney
                setTimeout(() => {clicck1_price.textContent = price.clickPlus1}, 1000)
            }
            break;
        

        case '+1auto':
            if(countNum >= price.clickAuto1){
                countNum -= price.clickAuto1; count.textContent = countNum
                localStorage.setItem('countNum', countNum)
                UpCountAuto++; localStorage.setItem('UpCountAuto', UpCountAuto);
                price.clickAuto1 = price.clickAuto1 * 2; localStorage.setItem('clickAuto1', price.clickAuto1)
                auto1_price.textContent = price.clickAuto1
            }
            else{
                auto1_price.textContent = noMoney
                setTimeout(() => {auto1_price.textContent = price.clickAuto1}, 1000)
            }
            break;


            case '+2':
            if(countNum >= price.clickPlus2){
                countNum -= price.clickPlus2; count.textContent = countNum
                localStorage.setItem('countNum', countNum)
                UpCount += 2; localStorage.setItem('UpCount', UpCount);
                price.clickPlus2 = price.clickPlus2 * 2; localStorage.setItem('clickPlus2', price.clickPlus2)
                clicck2_price.textContent = price.clickPlus2
            } else {
                clicck2_price.textContent = noMoney
                setTimeout(() => {clicck2_price.textContent = price.clickPlus2}, 1000)
            }
            break;
        

        case '+2auto':
            if(countNum >= price.clickAuto2){
                countNum -= price.clickAuto2; count.textContent = countNum
                localStorage.setItem('countNum', countNum)
                UpCountAuto += 2; localStorage.setItem('UpCountAuto', UpCountAuto);
                price.clickAuto2 = price.clickAuto2 * 2; localStorage.setItem('clickAuto2', price.clickAuto2)
                auto2_price.textContent = price.clickAuto2
            }
            else{
                auto2_price.textContent = noMoney
                setTimeout(() => {auto2_price.textContent = price.clickAuto2}, 1000)
            }
            break;



            case '+3':
            if(countNum >= price.clickPlus3){
                countNum -= price.clickPlus3; count.textContent = countNum
                localStorage.setItem('countNum', countNum)
                UpCount++; localStorage.setItem('UpCount', UpCount);
                price.clickPlus3 = price.clickPlus3 * 2; localStorage.setItem('clickPlus3', price.clickPlus3)
                clicck3_price.textContent = price.clickPlus3
            } else {
                clicck3_price.textContent = noMoney
                setTimeout(() => {clicck3_price.textContent = price.clickPlus3}, 1000)
            }
            break;
        

        case '+3auto':
            if(countNum >= price.clickAuto3){
                countNum -= price.clickAuto3; count.textContent = countNum
                localStorage.setItem('countNum', countNum)
                UpCountAuto += 3; localStorage.setItem('UpCountAuto', UpCountAuto);
                price.clickAuto3 = price.clickAuto3 * 2; localStorage.setItem('clickAuto3', price.clickAuto3)
                auto3_price.textContent = price.clickAuto3
            }
            else{
                auto3_price.textContent = noMoney
                setTimeout(() => {auto3_price.textContent = price.clickAuto3}, 1000)
            }
            break;
        default:
            break;
    }
}
