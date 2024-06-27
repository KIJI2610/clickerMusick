count.textContent = countNum
clicck1_price.textContent = price.clickPlus1
clicck2_price.textContent = price.clickPlus2
clicck3_price.textContent = price.clickPlus3
auto1_price.textContent = price.clickAuto1
auto2_price.textContent = price.clickAuto2
auto3_price.textContent = price.clickAuto3
exp_num.textContent = experience_num
lvl.textContent = start_game_lvl
exp.style.width = `${exp_width}%`

if(exp.style.width === '0%'){
    exp.style.boxShadow = 'none'
  }
  else{
    exp.style.boxShadow = '0 0 20px 5px rgba(52, 152, 219, 0.7)'
}
const right_bar = document.getElementById('right-bar')
right_bar.hidden = true
