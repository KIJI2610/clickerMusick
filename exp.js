const exp = document.getElementById('exp')
const lvl = document.getElementById('lvl')
const exp_num = document.getElementById('exp-num')
let experience_num = (localStorage.getItem('experience_num') === null)?(0):(Number(localStorage.getItem('experience_num')))
let start_game_lvl = (localStorage.getItem('start_game_lvl'))?(0):(Number(localStorage.getItem('start_game_lvl')))
let current_lvl_max_exp = (localStorage.getItem('current_lvl_max_exp') === null)?(10):(Number(localStorage.getItem('current_lvl_max_exp')))


center_bar.addEventListener('click', () => {
    experience_num++; localStorage.setItem('experience_num', experience_num)
    if(experience_num === 5){
        console.log(experience_num)
    }
})

