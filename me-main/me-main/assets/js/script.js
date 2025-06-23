document.addEventListener('DOMContentLoaded', function () {
    // Tạo overlay cho video
    const videoOverlay = document.createElement('div');
    videoOverlay.id = 'video-overlay';
    document.getElementById('video-background').appendChild(videoOverlay);

    // Lấy các phần tử HTML
    const videoBackground = document.getElementById('myVideo');
    const audioBackground = document.getElementById('myAudio');
    const blurredBox = document.getElementById('blurred-box');
    const closeButton = document.getElementById('close-button');

    // Bắt đầu phát video và audio ngay lập tức
    videoBackground.play().catch(e => console.log("Video play error:", e));
    audioBackground.play().catch(e => console.log("Audio play error:", e));
    blurredBox.style.display = 'block';
    document.body.classList.add('video-normal');

    // Xử lý nút Close
    closeButton.addEventListener('click', function() {
        // Thêm xử lý nếu cần
    });

    // Giới hạn âm lượng nhạc
    const maxVolume = 1;
    function limitVolume(volume) {
        audioBackground.volume = Math.min(volume, maxVolume);
    }

    document.body.classList.remove('video-normal');
    videoOverlay.style.display = 'block';
    limitVolume(1);
});