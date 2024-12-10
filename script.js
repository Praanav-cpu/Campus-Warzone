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

 






// volunteers


document.querySelectorAll('.image-card').forEach(card => {
  card.addEventListener('click', function() {
    // Flip the card
    this.classList.toggle('flip');

    // Redirect to the social media link when the icons are clicked
    const instaLink = this.getAttribute('data-insta');
    const linkedinLink = this.getAttribute('data-linkedin');

    const instagramIcon = this.querySelector('.instagram-icon');
    const linkedinIcon = this.querySelector('.linkedin-icon');

    instagramIcon.href = instaLink;
    linkedinIcon.href = linkedinLink;
  });
});


// footer

document.getElementById('scroll-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

 
window.addEventListener('scroll', function() {
  const image = document.querySelector('.girl');
  const rect = image.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      image.classList.add('scrolled');
  } else {
      image.classList.remove('scrolled');
  }
});
window.addEventListener('scroll', function() {
  const image = document.querySelector('.sqad');
  const rect = image.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      image.classList.add('scrolled');
  } else {
      image.classList.remove('scrolled');
  }
});


