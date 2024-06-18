const exp = document.getElementById('exp')
const lvl = document.getElementById('lvl')
const exp_num = document.getElementById('exp-num')
let experience_num = (localStorage.getItem('experience_num') === null)?(0):(Number(localStorage.getItem('experience_num')))
let start_game_lvl = (localStorage.getItem('start_game_lvl') === null)?(0):(Number(localStorage.getItem('start_game_lvl')))
let current_lvl_max_exp = (localStorage.getItem('current_lvl_max_exp') === null)?(10):(Number(localStorage.getItem('current_lvl_max_exp')))
let len_shkala_visual = (localStorage.getItem('len_shkala_visual') === null)?(0):(Number(localStorage.getItem('len_shkala_visual')))


center_bar.addEventListener('click', () => {
    experience_num++
    exp_num.textContent = experience_num
    if(experience_num % 5 === 0){
        setTimeout(() => {
            localStorage.setItem('experience_num', experience_num)
        }, 0)
    }
    
    if(current_lvl_max_exp === experience_num){
        start_game_lvl++; localStorage.setItem('start_game_lvl', start_game_lvl); lvl.textContent = start_game_lvl
        experience_num = 0; localStorage.setItem('experience_num', experience_num); exp_num.textContent = experience_num
        current_lvl_max_exp *= 10; localStorage.setItem('current_lvl_max_exp', current_lvl_max_exp)
        
    }
})

