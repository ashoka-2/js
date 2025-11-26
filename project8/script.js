let reels = [
    {
        isMuted: true,
        username: "muskankaria",
        profileImage: "/js/project8/videos/muskan.jpg",
        description: "aapki gulabi princess banjau?🥰🎀",
        musicName: "RK, AM.AN Kajra",
        musicImage: "/js/project8/videos/muskan.jpg",
        likes: 23576,
        comments: 713,
        shareCount: 6866,
        isLiked: true,
        isFollowed: true,
        video: "/js/project8/videos/muskan.mp4"
    },
    {
        isMuted: true,
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
        isMuted: true,
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
        isMuted: true,
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
        isMuted: true,
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
        isMuted: true,
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
        isMuted: true,
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
        video: "/js/project8/videos/video10.mp4"
    },
    {
        isMuted: true,
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
        isMuted: true,
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
        isMuted: true,
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
        isMuted: true,
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



const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    },
    { threshold: 0.6 }
);




function addData() {
    let sum = ''
    reels.forEach(function (reel, idx) {
        sum = sum + `
                 <div class="reel">
                 <div id=${idx} class="mute">${reel.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-fill"></i>'}</div>
                 <div class="play visible"><i class="ri-play-fill"></i></div>
                 
                 <video autoplay loop ${reel.isMuted ? 'muted' : ''} class="main-video" src="${reel.video}"></video>
                 
                 <div class="bottom">
                     <div class="user">
                         <img class="avatar" src="${reel.profileImage}" alt="image">
                         <h4>${reel.username}</h4>
                         <button id=${idx} class="follow">${reel.isFollowed ? "Following" : "Follow"}</button>
                     </div>
                     <p class="description">${reel.description}</p>

                <section class="music-section">
                    <div class="music">
                    <i class="ri-music-2-fill"></i>
                    <div class="marquee">
                        <div class="marquee-inner">${reel.musicName}</div>
                    </div> 
                </div>
                <div class="music-img">
                    <img class="music-avatar" src="${reel.musicImage}" alt="image">
                    </div>
                </section>
                 </div>

                 <div class="right">
                     <div class="right">
                         <div class="reel-actions">
                             <button id=${idx} class="action like">
                                 <H4>${reel.isLiked ? '<i class="redlove   ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</H4>
                                 <H6>${reel.likes}</H6>
                             </button>

                             <button class="action comment" >
                                <H4> <i class="ri-chat-3-line"></i></H4>
                                 <H6>${reel.comments}</H6>
                             </button>

                             <button class="action share">
                                 <H4><i class="ri-share-forward-line"></i></H4>
                                 <H6>${reel.shareCount}</H6>
                             </button>

                             <button class="action save">
                                 <H4><i class="ri-bookmark-line"></i></H4>
                             </button>

                             <button class="action more">
                                <H4> <i class="ri-more-2-fill"></i></H4>
                             </button>
                         </div>
                         </div>
                     </div>
                 </div>
                `
    })

    allReels.innerHTML = sum;

    const videos = document.querySelectorAll('.reel video');
    videos.forEach(video => observer.observe(video));
}

addData();



allReels.addEventListener('click', function (dets) {

    
     if (dets.target.className == 'action like') {
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likes++;
            reels[dets.target.id].isLiked = true;
        } else {
            reels[dets.target.id].likes--;
            reels[dets.target.id].isLiked = false;
        }
        addData();
    }


    if (dets.target.className == 'follow') {
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true;
        } else {
            reels[dets.target.id].isFollowed = false;
        }
        addData();
    }





    if (dets.target.className == 'main-video') {
        let video = dets.target;
        let playIcon = video.parentElement.querySelector('.play');

        if (video.paused) {
            video.play();
            playIcon.style.transform = `translate(-50%, -50%) scale(0)`;
        } else {
            video.pause();
            playIcon.style.transform = `translate(-50%, -50%) scale(1)`;
        }
    }

    if (dets.target.closest('.mute')) {
        let id = dets.target.closest('.mute').id;
        
        let newMuteState = !reels[id].isMuted;

        reels.forEach(reel => {
            reel.isMuted = newMuteState;
        });

        addData();
    }

});










