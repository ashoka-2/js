let main = document.querySelector("main");;
let button = document.querySelector("button");

let arr = []

button.addEventListener("click", function(){
    let div = document.createElement("div");
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let r = Math.random() * 360;
    let s = Math.random() * 3;
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    div.style.position = "absolute";
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.rotate = `${r}deg`;
    div.style.borderRadius= `${x}%`
    div.style.scale = s;
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    
    main.appendChild(div);
});


