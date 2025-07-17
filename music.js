// music.js
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.createElement('audio');
  audio.src = './nhac.mp3.mp4'; // Nhạc nền bạn đặt trong thư mục music/
  audio.autoplay = true;
  audio.loop = true;
  audio.volume = 0.5;

  // Tạo nút bật/tắt nhạc
  const toggleBtn = document.createElement('button');
  toggleBtn.innerText = '🔊 Tắt nhạc';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '20px';
  toggleBtn.style.right = '20px';
  toggleBtn.style.padding = '10px 18px';
  toggleBtn.style.background = '#ff8fb1';
  toggleBtn.style.color = '#fff';
  toggleBtn.style.border = 'none';
  toggleBtn.style.borderRadius = '20px';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.zIndex = '9999';
  toggleBtn.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
  toggleBtn.style.fontSize = '14px';

  toggleBtn.onclick = () => {
    if (audio.paused) {
      audio.play();
      toggleBtn.innerText = '🔊 Tắt nhạc';
    } else {
      audio.pause();
      toggleBtn.innerText = '🔇 Bật nhạc';
    }
  };

  document.body.appendChild(toggleBtn);
  document.body.appendChild(audio);
});
