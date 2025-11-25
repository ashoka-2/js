


let users = [
    {
    username: "muskankaria",
    profileImage: "/js/project8/videos/muskan.jpg",
    description: "aapki gulabi princess banjau?🥰🎀",
    musicName: "RK, AM.AN Kajra",
    musicImage: "/js/project8/videos/muskan.jpg",
    likes: "26.5K",
    comments: 713,
    shareCount: 6866,
    isLiked: true,
    isFollowed: true,
    video: "/js/project8/videos/muskan.mp4"
  },
   {
    username: "sara_art",
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Digital artist turning imagination into reality.",
    musicName: "Dreamscape - Aurora",
    musicImage: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc",
    likes: 18400,
    comments: 430,
    shareCount: 190,
    isLiked: false,
    isFollowed: true,
    video: "https://videos.pexels.com/video-files/855289/855289-hd_1920_1080_25fps.mp4"
  },
  {
    username: "mia_walker",
    profileImage: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    description: "Exploring new cities and capturing moments.",
    musicName: "City Lights - ChillMix",
    musicImage: "https://images.unsplash.com/photo-1485579149621-3123dd979885",
    likes: 12900,
    comments: 321,
    shareCount: 120,
    isLiked: false,
    isFollowed: false,
    video: "/js/project8/videos/video1.mp4"
  },
  {
    username: "alex_rider",
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Fitness, lifestyle, and motivation everyday.",
    musicName: "Energy Boost - DJ Nitro",
    musicImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    likes: 24200,
    comments: 620,
    shareCount: 310,
    isLiked: true,
    isFollowed: false,
        video: "/js/project8/videos/video2.mp4"

  },
 
  {
    username: "the_traveler",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    description: "Traveling worldwide exploring culture and food.",
    musicName: "Wanderlust Beats",
    musicImage: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d",
    likes: 31000,
    comments: 780,
    shareCount: 402,
    isLiked: true,
    isFollowed: true,
    video: "/js/project8/videos/video3.mp4"

  },
  {
    username: "coding_ninja",
    profileImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    description: "Coding life, coffee, and late-night debugging.",
    musicName: "LoFi Chill Code",
    musicImage: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    likes: 8700,
    comments: 210,
    shareCount: 98,
    isLiked: false,
    isFollowed: true,
    video: "/js/project8/videos/video4.mp4"

  },
  {
    username: "dancer_vibes",
    profileImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    description: "Dance is the hidden language of the soul.",
    musicName: "Groove Motion",
    musicImage: "https://images.unsplash.com/photo-1530099486328-e021101a494a",
    likes: 9500,
    comments: 198,
    shareCount: 140,
    isLiked: true,
    isFollowed: false,
    video: "/js/project8/videos/video9.mp4"
  },
  {
    username: "foodie_fun",
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Sharing my love for food around the globe.",
    musicName: "Tasty Beats",
    musicImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    likes: 14200,
    comments: 332,
    shareCount: 220,
    isLiked: false,
    isFollowed: false,       
    video: "/js/project8/videos/video6.mp4"

  },
  {
    username: "gamer_zone",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "Gaming clips, tips, and insane highlights.",
    musicName: "Pixel Pulse",
    musicImage: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    likes: 56000,
    comments: 1150,
    shareCount: 610,
    isLiked: true,
    isFollowed: true,
    video: "/js/project8/videos/video7.mp4"
  },
  {
    username: "fashion_queen",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "Daily outfits & luxury lifestyle inspirations.",
    musicName: "Runway Vibes",
    musicImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    likes: 27800,
    comments: 680,
    shareCount: 350,
    isLiked: false,
    isFollowed: true,        
    video: "/js/project8/videos/video8.mp4"

  },
  {
    username: "tech_master",
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    description: "Unboxing and reviewing the latest gadgets.",
    musicName: "Tech Flow",
    musicImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    likes: 19900,
    comments: 512,
    shareCount: 170,
    isLiked: true,
    isFollowed: false,
    video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
  }
];



let allReels = document.querySelector(".all-reels");

function addData(){
  let sum =''
users.forEach(function(user,idx){

  sum = sum + `
                <div class="reel">


                <div class="sound"><i class="ri-volume-mute-fill"></i></div>


          <div class="play visible"><i class="ri-play-fill"></i></div>
          
          <video autoplay loop muted class="main-video" src="${user.video}"></video>
                <div class="bottom">
                    <div class="user">
                        <img class="avatar" src="${user.profileImage}" alt="image">
                        <h4>${user.username}</h4>
                        <button class="follow">${user.isFollowed?"Following":"Follow"}</button>
                    </div>
                    <p class="description">${user.description}</p>




<section class="music-section">
    <div class="music">
    <i class="ri-music-2-fill"></i>

    <div class="marquee">
        <div class="marquee-inner">${user.musicName}</div>
    </div>
    
</div>
<div class="music-img">
    <img class="music-avatar" src="${user.musicImage}" alt="image">
        
    </div>
</section>

                </div>


                <div class="right">
                    <div class="right"></div>
                        <div class="reel-actions">
                            <button id=${idx} class="action like">
                                ${user.isLiked?'<i class="redlove   ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}
                                <span>${user.likes}</span>
                            </button>

                            <button class="action comment" >
                                <i class="ri-chat-3-line"></i>
                                <span>${user.comments}</span>
                            </button>

                            <button class="action share">
                                <i class="ri-share-forward-line"></i>
                                <span>${user.shareCount}</span>
                            </button>

                            <button class="action save">
                                <i class="ri-bookmark-line"></i>
                            </button>

                            <button class="action more">
                                <i class="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                    
                </div>

               `


        
        
})
allReels.innerHTML=sum
}

addData()































// ////////////////////////////////////////////////////////

// const videos = document.querySelectorAll('.reel video');

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       const video = entry.target;

//       if (entry.isIntersecting) {
//         video.play();
//       } else {
//         video.pause();
//         video.currentTime = 0;
//       }
//     });
//   },
//   {
//     threshold: 0.6,
//   }
// );

// videos.forEach(video => observer.observe(video));

// ////////////////////////////////////////////////////////










// let reels = document.querySelectorAll('.reel');
// let isMuted = true;
// let isPlaying = true;   

// let muteButtons = document.querySelectorAll('.sound');

// reels.forEach(function (reel) {
//   const muteBtn = reel.querySelector('.sound');
//   muteBtn.addEventListener('click', function (e) {
//     e.stopPropagation(); 
//     isMuted = !isMuted;
//     muteButtons.forEach(btn => {
//       btn.innerHTML = isMuted
//         ? `<i class="ri-volume-mute-fill"></i>`
//         : `<i class="ri-volume-up-fill"></i>`;
//     });
//     document.querySelectorAll('.reel video').forEach(vid => {
//       vid.muted = isMuted;
//     });
//   });


// reel.addEventListener("click", function (e) {
//     if (isPlaying) {
//       event.target.pause();
//       isPlaying = false;
//       reel.childNodes[3].style.transform = `translate(-50%, -50%) scale(1)`;
//     } else {
//       event.target.play();
//       isPlaying = true;
//       reel.childNodes[3].style.transform = `translate(-50%, -50%) scale(0)`;
//     }
//   });


// });









