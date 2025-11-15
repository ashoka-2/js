let h1 = document.querySelector('#h1');
let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');
let counter = 0;

inc.addEventListener('click',function(){
    counter++;
    h1.innerText = counter;
    h1.style.color = 'lightgreen';

})

inc.addEventListener('mouseover',function(){
    inc.style.backgroundColor = 'green';
})

inc.addEventListener('mouseout',function(){
    inc.style.backgroundColor = '#333';
})

dec.addEventListener('mouseover',function(){
    dec.style.backgroundColor = 'red';
})

dec.addEventListener('mouseout',function(){
    dec.style.backgroundColor = '#333';
})



dec.addEventListener('click',function(){
    counter--;
    h1.innerText = counter;
    h1.style.color = 'red';

    if(counter<0){
        alert("Bhai me ye nahi kar sakta");
        counter=0;
        h1.innerText = counter;
    }
})












