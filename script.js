document.addEventListener("DOMContentLoaded", () => {
    const backgroundMusic = document.getElementById("background-music");
    const muteToggle = document.getElementById("mute-toggle");
    const loader = document.querySelector("#loader");

    // Wait for a user interaction to play audio
    document.body.addEventListener("click", () => {
        backgroundMusic.play().catch(error => {
            console.log("Autoplay :", error);
        });
    }, { once: true });

    // Mute/Unmute functionality
    muteToggle.addEventListener("click", () => {
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
            muteToggle.textContent = "🔊"; // Unmuted icon
        } else {
            backgroundMusic.muted = true;
            muteToggle.textContent = "🔇"; // Muted icon
        }
    });

    // Loader animation
    setTimeout(() => {
        loader.style.top = "-100%"; // Hides the loader after 4.2 seconds
    }, 4200);
});
 
  