let array = [
  {
    "team": "Chennai Super Kings",
    "shortName": "CSK",
    "captain": "MS Dhoni",
    "trophies": 5,
    "primary": "#fff100",
    "secondary": "#1f3c88",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/447px-Chennai_Super_Kings_Logo.svg.png?20100423055245"
  },
  {
    "team": "Mumbai Indians",
    "shortName": "MI",
    "captain": "Hardik Pandya",
    "trophies": 5,
    "primary": "#0033a0",
    "secondary": "#d4af37",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/450px-Mumbai_Indians_Logo.svg.png?20120123095013"
  },
  {
    "team": "Kolkata Knight Riders",
    "shortName": "KKR",
    "captain": "Ajinkya Rahane",
    "trophies": 3,
    "primary": "#4b2161",
    "secondary": "#b28d33",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/351px-Kolkata_Knight_Riders_Logo.svg.png?20250627082926"
  },
  {
    "team": "Royal Challengers Bengaluru",
    "shortName": "RCB",
    "captain": "Rajat Patidar",
    "trophies": 1,
    "primary": "#9A0E1D",
    "secondary": "#000000",
    "logo": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfUdtuPeLBpRK8jSsadpcT7V9rg1wN0MnX284q58hEDmSOiclyPCXqKizCfOoP7hzSKbwYzFLF0V0g42L1u5XGt2NbYpaOUNqcvz2aQ1r-HmPacdMZnqBj1VGIvB7GocLVSpzLg?key=r5cBZ4_4zALLyxHIPDWoQtpf"
  },
  {
    "team": "Sunrisers Hyderabad",
    "shortName": "SRH",
    "captain": "Pat Cummins",
    "trophies": 1,
    "primary": "#ff6b00",
    "secondary": "#000000",
    "logo": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXehMXl747sMx7OzGWF5rzDTOFNYVDRr6Vz0RvYALIrKO4iF3hn953Tjg37eMfMirsdB_KdThMGsOOGw8ubuyX71FKQ0x6v90AmVPgfHRSfcrHqQ2p0UqIMto8r1lbZKOMEjXeM4TA?key=r5cBZ4_4zALLyxHIPDWoQtpf"
  },
  {
    "team": "Rajasthan Royals",
    "shortName": "RR",
    "captain": "Sanju Samson",
    "trophies": 1,
    "primary": "#E70194",
    "secondary": "#0047ab",
    "logo": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdbumltpepPfhRcnG_R4FumEovPPc1W9TTfURBGmBTrKx6VnZZjz_fG1pB2UyuWF4uEY8mV_-cjiS4FV6ZGqCzq-xBTb-m6EBAlu5L17zVV7f6ub994Hsda8iNbhg2JuiLTHpUV?key=r5cBZ4_4zALLyxHIPDWoQtpf"
  },
  {
    "team": "Delhi Capitals",
    "shortName": "DC",
    "captain": "Axar Patel",
    "trophies": 0,
    "primary": "#003E7A",
    "secondary": "#ce313d",
    "logo": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdKlHx9aC9Kvg8Br0JUGDsnQ7i64GVQbwEKnIS-raec-sQYHztb9pK95VNgbWFRpt1_lWNibfjBa_LXkdEdZUKRZAxPidM3JuCeS-ICLFFCHMot6wpV1tKeDXU5znrIQBQ4j2UFzw?key=r5cBZ4_4zALLyxHIPDWoQtpf"
  },
  {
    "team": "Punjab Kings",
    "shortName": "PBKS",
    "captain": "Shreyas Iyer",
    "trophies": 0,
    "primary": "#ffffff",
    "secondary": "#c60c30",
    "logo": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf0gV9cTJtBVM8IhPLQbFK5P-FnzBS9JUfkRQvQHrX4eDzlm5UZeTQsrkMy2Znj2jUFpxoZ4sFFOJnZL9WuZDump1ODTgquKqKCysrj6L4NJlQqoRHsacFOCFC9bbYRrN9GkKOC?key=r5cBZ4_4zALLyxHIPDWoQtpf"
  },
  {
    "team": "Lucknow Super Giants",
    "shortName": "LSG",
    "captain": "Rishabh Pant",
    "trophies": 0,
    "primary": "#5CE1E6",
    "secondary": "#d4af37",
    "logo": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfxLY-AwZ8JR2DQxoNTSNa8VkNX0Ui_EeZwQ6113Nj49FOKvOGhfuip5bj5mgAPPxJB5_VHJNku3jgAkyCZXAHXtAUNrIwMtp6Ev3Y2SbuEjxIWTjF5meqIVxA1Mbarkvmj0ytFbw?key=r5cBZ4_4zALLyxHIPDWoQtpf"
  },
  {
    "team": "Gujarat Titans",
    "shortName": "GT",
    "captain": "Shubman Gill",
    "trophies": 1,
    "primary": "#0085ca",
    "secondary": "#f2c75c",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/554px-Gujarat_Titans_Logo.svg.png?20220428000419"
  }
]


let main = document.querySelector("main");

let team = document.querySelector(".team");

let card = document.querySelector(".card");

let img = document.querySelector("img");


let teamname = document.querySelector("#teamname");

let captain = document.querySelector("#captain");

let trophies = document.querySelector("#trophies");

let btn = document.querySelector("button");


btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * array.length);
  let Team = array[random];   
  
    img.src = Team.logo;
    team.innerHTML = Team.shortName;
    teamname.innerHTML = Team.team;
    captain.innerHTML = Team.captain;
    trophies.innerHTML =Team.trophies;
    card.style.backgroundColor = Team.primary;
    main.style.backgroundColor = Team.secondary; 
});

































