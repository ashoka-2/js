let homeapps = [
    {
        name:"This PC",
        title:"This Pc",
        image:'images/thispc'
    },
    {
        name:"Recycle Bin",
        title:"Bin",
        image:'images/bin0.png'
    },
    {
        name:"Github",
        title:"Github",
        image:'images/github.png'
    },
    {
        name:"File Explorer",
        title:"File Explorer",
        image:'images/folder.png'
    },
    {   
        name:"Settings",
        title:"Settings",
        image:'images/settings.png'
    },
    
    {
        name:"Edge",
        title:"Microsoft Edge",
        image:'images/edge.png',
        

    },
    {
        name:"Terminal",
        title:"Terminal",
        image:'images/terminal.png',
        

    },
    {
        name:"Store",
        title:"Microsoft Store",
        image:'images/store.png',
        
    },
    {
        name:"Chrome",
        title:"Google Chrome",
        image:'images/chrome.png'
    },
    {
        name:"VS Code",
        title:"Vs Code",
        image:'images/vscode.png'
    },
    {
        name:"Spotify",
        title:"Spotify",
        image:'images/spotify.png'
    },
     {
        name:"Twitter",
        title:"twitter",
        image:'images/twitter.png'
    },
    {
        name:"Calculator",
        title:"Calculator",
        image:'images/calculator.png'
    },
    

]



let apps = [
    {
        name:"File Explorer",
        title:"File Explorer",
        image:'images/folder.png'
    },
    {   
        name:"Settings",
        title:"Settings",
        image:'images/settings.png'
    },
    
    {
        name:"Edge",
        title:"Microsoft Edge",
        image:'images/edge.png',
        

    },
    {
        name:"Store",
        title:"Microsoft Store",
        image:'images/store.png',
        
    },
    {
        name:"Chrome",
        title:"Google Chrome",
        image:'images/chrome.png'
    },
    {
        name:"VS Code",
        title:"Vs Code",
        image:'images/vscode.png'
    },
    {
        name:"Spotify",
        title:"Spotify",
        image:'images/spotify.png'
    },
    

]


let app = document.querySelector('.applications');

function renderNavbar(){
    sum = []
    apps.forEach(function(args){
    // console.log(args);
    sum = sum + `<div title="${args.title}" class="img-div"><img src="${args.image}" alt=""></div>`
})
app.innerHTML = sum
}

renderNavbar();

let homeapp = document.querySelector('.home-screen');


function renderHomeapps(){
    
addapps = []
homeapps.forEach(function(args){
    addapps = addapps + `<div class="single-app" data-action="${args.name}">
                <img src="${args.image}" alt="">
                <h6>${args.name}</h6>
            </div>`
})

homeapp.innerHTML = addapps

}
renderHomeapps();





app.addEventListener("click",function(args){


    let action = args.target.title;


     if(action == "Google Chrome") {
        openIframeWindow("Google Chrome", "https://www.google.com/webhp?igu=1",'images/chrome.png');
    }
    
    if(action == "File Explorer"){
        openIframeWindow("File Explorer",'')       
    }
    if(action == "Settings"){
        openIframeWindow("Settings",'')       
    }
    if(action == "Microsoft Edge"){
        openIframeWindow("Microsoft Edge",'https://www.bing.com')       
    }
    if(action == "Microsoft Store"){
        openIframeWindow("Microsoft Store",'')       
    }
    if(action == "Vs Code"){
        openIframeWindow("VS Code",'')       
    }
    if(action == "Spotify"){
        openIframeWindow("Spotify",'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M')       
    }

})

homeapp.addEventListener("click",function(args){


    let action = args.target.closest(".single-app").dataset.action;

    
    
     if(action == "Chrome") {
        openIframeWindow("Google Chrome", "https://www.google.com/webhp?igu=1",'images/chrome.png');
    }
     if(action == "File Explorer"){
        openIframeWindow("File Explorer",'')       
    }
    if(action == "Settings"){
        openIframeWindow("Settings",'')       
    }
    if(action == "Edge"){
        openIframeWindow("Microsoft Edge",'https://www.bing.com')       
    }
    if(action == "Store"){
        openIframeWindow("Microsoft Store",'')       
    }
    if(action == "VS Code"){
        openIframeWindow("VS Code",'')       
    }
    if(action == "Spotify"){
        openIframeWindow("Spotify",'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M')       
    }
    if(action == "Twitter"){
        openIframeWindow("Twitter",'')       
    }
    if(action == "Calculator"){
        openIframeWindow("Calculator",'')       
    }
    if(action == "Terminal"){
        openIframeWindow("Terminal",'')       
    }
    if(action == "Github"){
        openIframeWindow("Github",'https://github.com/ashoka-2')       
    }
    if(action == "This PC"){
        openIframeWindow("This PC",'')       
    }
    if(action == "Recycle Bin"){
        openIframeWindow("Recycle Bin",'')       
    }
    
})





















let shortcuts =[
    {
        first:'<img src="images/view.png" alt="">',
        second:"View",
        third:'<i class="ri-arrow-right-s-line"></i>',
    },
    {
        first:'<img src="images/sort.png" alt="">',
        second:"Sort by",
        third:'<i class="ri-arrow-right-s-line"></i>',
    },
    {
        first:'<i class="ri-reset-right-fill"></i>',
        second:"Refresh",
        third:'',
    },
    {
        first:'<img src="images/new.png" alt="">',
        second:"New",
        third:'<i class="ri-arrow-right-s-line"></i>',
    },
    {
        first:'<i class="ri-computer-line"></i>',
        second:"Display Setting",
        third:'',
    },
    {
        first:'<img src="images/pen" alt="">',
        second:"Personlize",
        third:'',
    },
    {
        first:'<img src="images/terminal.png" alt="">',
        second:"Open in Terminal",
        third:'',
    },
    {
        first:'<img src="images/share.png" alt="">',
        second:"Show More Options",
        third:'',
    },
]

let shortcut = document.querySelector(".shortcut-div")

function renderShortcuts(){
    short = []
shortcuts.forEach(function(args){
    short = short + `<div class="short-div" data-action="${args.second}">
                <div class="inner-short">
                    ${args.first}
                    <h6 >${args.second}</h6>
                </div>
                <div class="arrow-short">
                ${args.third}
                </div>
            </div>`
})

shortcut.innerHTML = short
}

renderShortcuts();

document.body.addEventListener('contextmenu',function(args){
    args.preventDefault();
    shortcut.style.display = 'flex';
      shortcut.style.top = args.pageY + "px";
    shortcut.style.left = args.pageX + "px";

})

document.body.addEventListener('click',function(args){
    args.preventDefault();
    shortcut.style.display = 'none';

})




shortcut.addEventListener('click',function(args){
   

    let action = args.target.closest('.short-div').dataset.action;
    
    if(action == "New"){

        console.log("found");
        homeapps.push(
        {
        name:"New Folder",
        title:"Folder",
        image:'images/folder.png'
        }
        )
    renderHomeapps();
    }

    if (action === "Refresh") {
        homeapp.innerHTML = "";
        setTimeout(() => {
            renderHomeapps(); 
        }, 50);
    }
    
})



































function openIframeWindow(appName, appUrl,appLogo) {

    let iframewindow = document.createElement("div");
    iframewindow.className = "app-window";
    iframewindow.innerHTML = `
        <div class="title-bar">
            <div class = "title"><img src="${appLogo}" alt="" class="app-logo">
            <span>${appName}</span></div>
            <div class="win-controls">
                <button class="min-btn"><i class="ri-subtract-line"></i></button>
                <button class="max-btn"><i class="ri-square-line"></i></button>
                <button class="close-btn"><i class="ri-close-large-line"></i></button>
            </div>
        </div>
        <iframe src="${appUrl}" class="window-frame"></iframe>
    `;

    document.body.appendChild(iframewindow);

    iframewindow.style.position = "absolute";
    iframewindow.style.left = "50%";
    iframewindow.style.top = "50%";
    iframewindow.style.transform = "translate(-50%,-50%)";
    iframewindow.style.width = "750px";
    iframewindow.style.height = "500px";
    iframewindow.style.zIndex = 9999;

    iframewindow.querySelector(".close-btn").addEventListener("click", () => {
        iframewindow.remove();
    });

    iframewindow.querySelector(".min-btn").addEventListener("click", () => {
        iframewindow.style.display = "none";
    });

    iframewindow.querySelector(".max-btn").addEventListener("click", () => {
        if (
            iframewindow.dataset.maximized !== "true") {
            iframewindow.dataset.prevLeft = iframewindow.style.left;
            iframewindow.dataset.prevTop = iframewindow.style.top;
            iframewindow.dataset.prevWidth = iframewindow.style.width;
            iframewindow.dataset.prevHeight = iframewindow.style.height;

            iframewindow.style.left = "0px";
            iframewindow.style.top = "0px";
            iframewindow.style.transform = "translate(0%,0%)";
            iframewindow.style.width = "100vw";
            iframewindow.style.height = "calc(100% - 50px)";

            iframewindow.dataset.maximized = "true";
        } else {
            iframewindow.style.left = iframewindow.dataset.prevLeft;
            iframewindow.style.top = iframewindow.dataset.prevTop;
            iframewindow.style.transform = "translate(-50%,-50%)";

            iframewindow.style.width = iframewindow.dataset.prevWidth;
            iframewindow.style.height = iframewindow.dataset.prevHeight;

            iframewindow.dataset.maximized = "false";
        }
    });
}




let time = document.querySelector(".time")

console.log(time.innerHTML);
