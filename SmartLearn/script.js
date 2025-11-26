// Ko‘rishlar sonini saqlash
let views = localStorage.getItem('views') || 0;
views++;
localStorage.setItem('views', views);

// HTML ichida ko‘rsatish
const vc = document.getElementById('viewCount');
if (vc) vc.textContent = views;
