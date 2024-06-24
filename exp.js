const exp = document.getElementById('exp')
const lvl = document.getElementById('lvl')
const exp_num = document.getElementById('exp-num')

let experience_num = (localStorage.getItem('experience_num') === null)?(0):(Number(localStorage.getItem('experience_num')))
let start_game_lvl = (localStorage.getItem('start_game_lvl') === null)?(0):(Number(localStorage.getItem('start_game_lvl')))
let current_lvl_max_exp = (localStorage.getItem('current_lvl_max_exp') === null)?(100):(Number(localStorage.getItem('current_lvl_max_exp')))
let len_shkala_visual = (localStorage.getItem('len_shkala_visual') === null)?(0):(Number(localStorage.getItem('len_shkala_visual')))
let exp_width = (localStorage.getItem('exp_width') === null)?(0):(Number(localStorage.getItem('exp_width')))

function checkPercentage(variable1, variable2) {
    for (let percent = 1; percent <= 100; percent++) {
      if (variable2 === variable1 * (percent / 100)) {
        return percent;
      }
    }
    return Number(localStorage.getItem('exp_width'));
}

center_bar.addEventListener('click', () => {
    experience_num++
    exp_num.textContent = experience_num
    if(experience_num % 5 === 0){
        setTimeout(() => {
            localStorage.setItem('experience_num', experience_num)
        }, 0)
    }

    if(checkPercentage !== Number(localStorage.getItem('exp_width'))){
        exp_width = checkPercentage(current_lvl_max_exp, experience_num)
        exp.style.width = `${exp_width}%`
        setTimeout(() => {
          localStorage.setItem('exp_width', exp_width)
        }, 0)
    }
    
    if(current_lvl_max_exp === experience_num){
        start_game_lvl++; localStorage.setItem('start_game_lvl', start_game_lvl); lvl.textContent = start_game_lvl
        experience_num = 0; localStorage.setItem('experience_num', experience_num); exp_num.textContent = experience_num
        current_lvl_max_exp *= 2; localStorage.setItem('current_lvl_max_exp', current_lvl_max_exp)
        exp.style.width = '0%'; exp_width = 0; localStorage.setItem('exp_width', exp_width)
    }

    if(exp.style.width === '0%'){
      exp.style.boxShadow = 'none'
    }
    else{
      exp.style.boxShadow = '0 0 20px 5px rgba(52, 152, 219, 0.7)'
    }
})

