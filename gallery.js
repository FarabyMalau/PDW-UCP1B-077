const audio = document.getElementById('myAudio');

function toggleAudio() {
    const btn = document.getElementById('playPauseBtn');
    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸ Pause";
    } else {
        audio.pause();
        btn.innerText = "▶ Play";
    }
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    document.getElementById('playPauseBtn').innerText = "▶ Play";
}

function changeImage(index, element) {
    const mainImg = document.getElementById('mainImg');
    const images = [
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
    ];
    mainImg.src = images[index];
    
    // Update active thumb
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
}

function showImageInfo() {
    alert("Foto ini diambil dari dokumentasi Tech Community 2026."); [cite: 32]
}