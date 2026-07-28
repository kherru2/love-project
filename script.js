// === SETTING PASSWORD (1+1=?) 
const CORRECT_PASSWORD = "4"; 

// === SETTING TANGGAL JADIAN ===
const START_DATE = new Date("2025-12-18T00:00:00");

document.addEventListener("DOMContentLoaded", () => {
  createFloatingParticles();
  startCountdown();
});

// Navigation Function
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Flow Functions
function startJourney() {
  showPage("password");
}

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const msg = document.getElementById("passwordMessage");

  if (input === CORRECT_PASSWORD) {
    msg.style.color = "#4E9F3D";
    msg.innerText = "Password benar! YEYYYY ❤️";
    createConfetti();
    setTimeout(() => {
      showPage("envelope");
    }, 700);
  } else {
    msg.style.color = "#f72585";
    msg.innerText = "Password salah.. di ingat lagi bub🥺";
  }
}

function openEnvelope() {
  createConfetti();
  showPage("introLetter");
}

function goToTimeline() {
  showPage("timeline");
}

function goToUnsaid() {
  showPage("unsaid");
}

function goToLetter() {
  showPage("loveLetter");
}

function openLoveLetter() {

    const content =
        document.getElementById("loveLetterContent");

    const openBtn =
        document.getElementById("openLoveLetterButton");

    const nextBtn =
        document.getElementById("afterLetterButton");

    const music =
        document.getElementById("loveMusic");


    // buka surat
    content.classList.add("show");


    // sembunyikan tombol buka surat
    openBtn.style.display = "none";


    // tampilkan tombol lanjut
    nextBtn.classList.remove("hidden");


    // mulai musik
    music.currentTime = 0;

    music.play()
        .then(() => {

            console.log(
                "Musik berhasil diputar ❤️"
            );

        })
        .catch((error) => {

            console.log(
                "Musik gagal diputar:",
                error
            );

        });


    // efek confetti
    createConfetti();

}

function goToCountdown() {
  showPage("countdown");
}

function goToEnding() {
  createConfetti();
  showPage("ending");
}

// Counter Calculator
function startCountdown() {
  function updateTimer() {
    const now = new Date();
    const diff = now - START_DATE;

    if (diff < 0) return;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(totalDays / 30.4375);
    const days = Math.floor(totalDays % 30.4375);

    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Background Partikel Melayang Soft
function createFloatingParticles() {
  const container = document.createElement("div");
  container.id = "heart-particles";
  document.body.appendChild(container);

  const icons = ["❤️", "✨", "🌸", "💖"];

  setInterval(() => {
    const particle = document.createElement("div");
    particle.classList.add("floating-heart");
    particle.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = Math.random() * 3 + 5 + "s";
    particle.style.fontSize = Math.random() * 12 + 10 + "px";

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 8000);
  }, 450);
}

// Efek Letupan Sparkle Halus Saat Klik Action
function createConfetti() {
  const colors = ["#f72585", "#ffb703", "#7209b7", "#ffffff"];
  for (let i = 0; i < 24; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.left = "50vw";
    confetti.style.top = "50vh";
    confetti.style.width = Math.random() * 6 + 5 + "px";
    confetti.style.height = Math.random() * 6 + 5 + "px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";
    document.body.appendChild(confetti);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 180 + 40;
    const x = Math.cos(angle) * velocity;
    const y = Math.sin(angle) * velocity;

    confetti.animate([
      { transform: "translate(0, 0) scale(1)", opacity: 1 },
      { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
    ], {
      duration: 900,
      easing: "cubic-bezier(0, .8, .5, 1)",
      fill: "forwards"
    });

    setTimeout(() => confetti.remove(), 900);
  }
}