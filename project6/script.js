let img = document.querySelector('.imgdiv');
let love = document.querySelector('#pop-btn');
let like = document.querySelector('#love svg path');

const gradients = [
  'linear-gradient(to right,#ff0069,#d300c5)',
  'linear-gradient(135deg,#7638fa,#ff0069)',
  'linear-gradient(135deg,#ff0069,#ff7a00)',
  'linear-gradient(to right, #ff7a00, #ffd600)',
  
];


const rotations = ['-40deg','-20deg' ,'0deg','20deg','40deg'];

function pick(x){return x[Math.floor(Math.random()*x.length)]}

img.addEventListener('dblclick',function(){
    like.style.fill='red'
    like.style.strokeWidth=0

    love.style.background=pick(gradients)
    love.style.webkitBackgroundClip='text'
    love.style.backgroundClip='text'
    love.style.color='transparent'

    let r=pick(rotations)

    love.classList.remove('animate')
    void love.offsetWidth
    love.style.setProperty('--r',r)
    love.classList.add('animate')
})

like.addEventListener('click',function(){
    if(like.style.fill==='red'){
        like.style.fill='none'
        like.style.strokeWidth=2
    }else{
        like.style.fill='red'
        like.style.strokeWidth=0
    }
})
