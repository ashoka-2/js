let main = document.querySelector("main");;
let button = document.querySelector("button");

let arr = [
  "Sheryians is love",
  "JavaScript is love",
  "Coding is life",
  "Harsh Bhaiya is the best",
  "Sarthak Bhaiya is pro",
  "Frontend feels like magic",
  "Backend is the real power",
  "GSAP makes websites alive",
  "Locomotive Scroll is smooth af",
  "React is the modern superpower",
  "Debugging is meditation",
  "Practice is the only shortcut",
  "Consistency beats talent",
  "Code, Eat, Sleep, Repeat",
  "Small projects make big coders",
  "Errors are your best teachers",
  "CSS is pure attitude",
  "Logic is everything",
  "Learning never stops",
  "Sheryians fam forever"
];


button.addEventListener("click", function(){
    // let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let r = Math.random() * 360;
    let s = Math.random() * 3;
    let o = Math.random()*1;
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);

    let len = Math.floor(Math.random() * arr.length);

    h1.innerText = arr[len];

    h1.style.left = `${x}%`;
    h1.style.top = `${y}%`;
    h1.style.rotate = `${r}deg`;
    h1.style.scale = s;
    // h1.style.color = 'white';
    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;
    h1.style.position = "absolute";

    h1.style.opacity = o;

    // div.style.position = "absolute";
    // div.style.left = `${x}%`;
    // div.style.top = `${y}%`;
    // div.style.width = "100px";
    // div.style.height = "100px";
    // div.style.rotate = `${r}deg`;
    // div.style.borderRadius= `${x}%`
    // div.style.scale = s;
    // div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    
    main.appendChild(h1);
});


