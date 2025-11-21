let users = [
  {
    "fullName": "Maya Sinclair",
    "profession": "UX / Product Designer",
    "image": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?&w=400",  
    "description": "Maya is a creative product designer specialising in user-centred experiences for mobile and web. She loves typography and minimal layouts.",
    "tags": ["UX", "design", "mobile", "web", "typography"]
  },
  {
    "fullName": "Liam O’Connor",
    "profession": "Backend Developer",
    "image": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?&w=400",
    "description": "Liam is a backend engineer with strong experience building scalable APIs and microservices in Python and Go. He also mentors junior devs.",
    "tags": ["backend", "apis", "python", "go", "microservices"]
  },
  {
    "fullName": "Aisha Patel",
    "profession": "Digital Marketing Specialist",
    "image": "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?&w=400",
    "description": "Aisha works on digital growth strategies, SEO and content marketing for tech startups. She’s passionate about analytics and storytelling.",
    "tags": ["marketing", "seo", "content", "growth", "analytics"]
  },
  {
    "fullName": "Carlos Vega",
    "profession": "Photographer & Videographer",
    "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9?&w=400",
    "description": "Carlos captures stories through his lens — from corporate events to travel documentaries. He combines photography with drone videography.",
    "tags": ["photography", "videography", "drone", "travel", "storytelling"]
  },
  {
    "fullName": "Nina Zhou",
    "profession": "Data Scientist",
    "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?&w=400",
    "description": "Nina extracts insights from large datasets. She builds predictive models and loves visualising data to help teams make informed decisions.",
    "tags": ["data", "machine-learning", "python", "visualisation", "predictive"]
  },
  {
    "fullName": "Oliver Jensen",
    "profession": "Front-end Engineer",
    "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?&w=400",
    "description": "Oliver specialises in building responsive web interfaces using React and modern CSS. He enjoys crafting animations and interactive UI.",
    "tags": ["frontend", "react", "css", "web", "ui"]
  },
  {
    "fullName": "Mohammad Alvi",
    "profession": "DevOps Engineer",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?&w=400",
    "description": "Mohammad automates deployment pipelines, configures cloud infrastructure (AWS/GCP) and ensures systems are scalable and resilient.",
    "tags": ["devops", "cloud", "aws", "infrastructure", "automation"]
  },
  {
    "fullName": "Elena Rossi",
    "profession": "Content Strategist",
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?&w=400",
    "description": "Elena defines content ecosystems for brands, plans editorial calendars, and works closely with design and marketing teams to craft voice and tone.",
    "tags": ["content", "strategy", "editorial", "branding", "copywriting"]
  },
  
]



let main = document.querySelector('main');
let content = document.querySelector('.content');

sum=''

users.forEach(function(user){
    // console.log(user);
    sum = sum + `<div class="profile-card">
        <div class="profile-image">
            <img src="${user.image}" alt="Portrait of ${user.fullName}" width="160" height="160">
        </div>

        <div class="profile-content">
            <div class="author-info">
            <h2 class="full-name">${user.fullName}</h2>
            <button class="friend">Add Friend</button>
            </div>
            <p class="profession">${user.profession}</p>

            <p class="description">${user.description}}</p>

            <ul class="tags">
                <li class="tag">${user.tags[0]}</li>
                <li class="tag">${user.tags[1]}</li>
                <li class="tag">${user.tags[2]}</li>
                <li class="tag">${user.tags[3]}</li>
                <li class="tag">${user.tags[4]}</li>
            </ul>
        </div>
    </div>  `



content.innerHTML = sum;

})







let friend = document.querySelectorAll('.friend');

let check = 0

friend.forEach(function(btn){
    let check = 0;

    btn.addEventListener('click', function(){
        if(check === 0){
            btn.innerHTML = "Following";
            btn.style.backgroundColor = "green";
            check = 1;
        } else {
            btn.innerHTML = "Add Friend";
            btn.style.backgroundColor = "#2563eb";

            check = 0;
        }
    });


    
});



let cursor = document.querySelector('.cursor');

main.addEventListener("mousemove",function(e){
  // console.log(e.x,e.y);
  main.style.cursor = "none";


  cursor.style.left = e.x+"px";
  cursor.style.top = e.y+"px";
  
})


