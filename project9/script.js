let body = document.body

body.addEventListener("mousemove",function(e){
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');

})


let flash = document.querySelector(".ghost")
body.addEventListener("click",function(e){
   flash.style.opacity= 0;
//    flash.style.background = "radial-gradient(150px at var(--x) var(--y),trasparent, transparent )";

    
})



let text = document.querySelector(".text");
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
let interval = null;

const ironman = text.innerText; 

text.addEventListener("mouseenter", () => {
    clearInterval(interval);
  let badho = 0;
  interval = setInterval(() => {
    text.innerText = ironman.split("").map((char, index) => {
        if (index < badho) {
          return ironman[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    if (badho >= ironman.length) { 
      clearInterval(interval);
    }
    badho += 1/3; 
  }, 50);
});
