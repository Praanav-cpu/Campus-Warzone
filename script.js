const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');
const soundEffect = document.getElementById('soundEffect');
const icon = document.getElementById('icon');
let isMuted = false;

muteUnmuteBtn.addEventListener('click', () => {
  if (isMuted) {
    soundEffect.muted = false;
    icon.textContent = '🔊'; // Speaker icon
    muteUnmuteBtn.setAttribute('aria-label', 'Mute Sound');
    soundEffect.play();
    isMuted = false;
  } else {
    soundEffect.muted = true;
    icon.textContent = '🔇'; // Muted speaker icon
    muteUnmuteBtn.setAttribute('aria-label', 'Unmute Sound');
    isMuted = true;
  }
});

 
gsap.utils.toArray('.page').forEach((section, i) => {
  gsap.fromTo(section, 
    { opacity: 0, scale: 0.8 }, 
    { 
      opacity: 1, scale: 1, 
      duration: 1.5, 
      ease: 'power4.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 75%',
        toggleActions: "restart none none none" 
        
      }
    }
  );
});

 



 
