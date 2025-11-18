var grow = 0
var btn = document.querySelector('.button')
var per = document.querySelector('.percentage')
var loading = document.querySelector('.loading')

btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'
    
    var num = 50 + Math.floor(Math.random()*50)
    
    console.log('Your file will be downloaded in',num/10,'seconds');

    var int = setInterval(() => {
        grow++
        per.innerHTML = grow+'%'
        loading.style.width = grow+'%'
    },num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, num*100);

})