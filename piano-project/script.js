let span = document.querySelectorAll(".key span");
let pianokey = document.querySelectorAll(".key");
let black = document.querySelectorAll(".key.black");
let white = document.querySelectorAll(".key.white");

const audio = [];
for (let i = 0; i < 36; i++) {
    audio[i] = new Audio(`audio/${28 + i}.mp3`);
}

document.body.addEventListener("keyup", function (e) {
    const pressed = (e.key || '').toLowerCase();
    for (let i = 0; i < span.length; i++) {
        const key = (span[i].textContent || '').toLowerCase();
        if (pressed === key) {
            audio[i].cloneNode().play();

            
            const el = pianokey[i];
            if (el) {
                const isBlack = el.classList.contains('black');
                el.style.transform = "translateY(5px)";
                el.style.backgroundColor = isBlack ? "#393939" : "#e4e4e4";

                setTimeout(() => {
                    el.style.transform = "";          
                    el.style.backgroundColor = "";    
                }, 120);
            }

            break; 
        }
    }

});


pianokey.forEach(function(key, i) {

    key.addEventListener("click", function () {
        audio[i].cloneNode().play();  

    });

});



black.forEach(function(b){
    b.addEventListener("click", function(){

        b.style.transform = "translateY(5px)";
        b.style.backgroundColor = "#393939";

        setTimeout(() => {
            b.style.transform = "";
            b.style.backgroundColor = "";
        }, 120);  
    });
});

white.forEach(function(w){
    w.addEventListener("click", function(){

        w.style.transform = "translateY(5px)";
        w.style.backgroundColor = "#e4e4e4";

        setTimeout(() => {
            w.style.transform = "";
            w.style.backgroundColor = "";
        }, 120);
    });
});


