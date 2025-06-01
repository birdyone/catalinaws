
document.addEventListener("DOMContentLoaded", () => {
  const terminalOutput = document.getElementById("terminal-output");
  const lines = [
    "> booting Catalina's portfolio...",
    "> Access granted.",
    "> Running showcase.js...",
    "> Hello world! Welcome to the terminal.",
    "",
    "<span class=\"glow-emoji\">👋</span> Hey there! I'm Catalina Jorquera",
    "<span class=\"glow-emoji\">💎</span> Developer by trade, designer at heart. I code things that look good and work even better.",
    "<span class=\"glow-emoji\">🧠</span> Currently diving deep into Computer Science at Goldsmiths, University of London.",
    "<span class=\"glow-emoji\">🎓</span> Certified by MIT, Harvard, Oxford & Cambridge (yes, all of them 🤓).",
    "<span class=\"glow-emoji\">💻</span> Full Stack Dev — fluent in JavaScript, React, Next.js, Python...",
    "<span class=\"glow-emoji\">🎨</span> I mix code with creativity: UX/UI, branding, and building delightful experiences.",
    "<span class=\"glow-emoji\">🍵</span> Matcha-fueled and idea-obsessed — let's build cool things!"
  ];

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex < lines.length) {
      const line = lines[lineIndex];
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex < line.length) {
          terminalOutput.innerHTML += line[charIndex++];
        } else {
          terminalOutput.innerHTML += "<br>";
          clearInterval(interval);
          lineIndex++;
          setTimeout(typeLine, 200);
        }
      }, 30);
    }
  }

  typeLine();
});


document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-terminal");
  const main = document.querySelector("main");
  const log = document.getElementById("terminal-log");
  const finalMsg = document.getElementById("terminal-final-message");
  const cursor = document.querySelector(".terminal-cursor");
  const sound = document.getElementById("crt-sound");

  main.style.display = "none";
  let lines = log.innerText.split("\n");
  log.innerText = "";

  let i = 0;
  function showLines() {
    if (i < lines.length) {
      log.innerText += lines[i++] + "\n";
      setTimeout(showLines, 400);
    } else {
      finalMsg.style.display = "block";
      blinkCursor(3);
    }
  }

  function blinkCursor(times) {
    let count = 0;
    const blink = setInterval(() => {
      cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
      if (++count >= times * 2) {
        clearInterval(blink);
        shutdownCRT();
      }
    }, 300);
  }

  function shutdownCRT() {
    intro.classList.add("crt-off");
    sound.play();
    setTimeout(() => {
      intro.remove();
      main.style.display = "block";
    }, 1200);
  }

  // Simulate loading bar
  setTimeout(showLines, 5000); // after fake loading
});


document.addEventListener("DOMContentLoaded", () => {
  const words = [
    "Full Stack Developer",
    "UX Designer",
    "Creative Technologist",
    "AI Strategist",
    "Dream Builder 💻✨"
  ];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  const typedText = document.querySelector(".typed-text");

  function typeEffect() {
    if (!typedText) return;

    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        currentWord = words[i].slice(0, j++);
      } else if (isDeleting && j >= 0) {
        currentWord = words[i].slice(0, j--);
      }

      typedText.innerHTML = currentWord;

      if (!isDeleting && j === words[i].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200); // Pausa al final
        return;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }

  typeEffect();
});



const services = [
  { name: "DESIGN", bg: "galaxy", description: "Visual systems crafted to impress and express." },
  { name: "DEVELOPMENT", bg: "code", description: "High-performance builds using modern, scalable tech." },
  { name: "AI STRATEGY", bg: "chip", description: "Custom AI plans turning your data into decisions." },
  { name: "SECURITY", bg: "cyber", description: "Encrypted frameworks to keep your systems bulletproof." },
  { name: "BRANDING", bg: "vaporwave", description: "Identity design with emotional impact and clarity." },
  { name: "UX/UI CONSULTING", bg: "uxgrid", description: "Fix friction. Elevate flow. Delight your users." },
  { name: "E-COMMERCE", bg: "shop", description: "Stores that sell—optimized, automated, beautiful." },
  { name: "FULL STACK INTEGRATIONS", bg: "stack", description: "Bringing frontend, backend, and APIs into harmony." },
  { name: "MVP TOOLKIT", bg: "blueprint", description: "Launch-ready tools and templates to build fast." },
  { name: "GROWTH STRATEGY", bg: "growth", description: "Digital tactics to attract, retain, and scale." },
  { name: "INSERT COIN TO ENTER LABS", bg: "labs", description: "Experimental playground. Weird ideas welcome." }
];

let currentIndex = 0;

function updateSelection() {
  const items = document.querySelectorAll("#menu li");
  items.forEach((item, index) => {
    item.classList.toggle("selected", index === currentIndex);
  });
}

function nextService() {
  currentIndex = (currentIndex + 1) % services.length;
  updateSelection();
}

function prevService() {
  currentIndex = (currentIndex - 1 + services.length) % services.length;
  updateSelection();
}

function activateService() {
  const selected = services[currentIndex];

  const overlay = document.createElement("div");
  overlay.className = "service-overlay " + selected.bg;
  overlay.innerHTML = `
    <div class="transition-text">LEVEL UNLOCKED: ${selected.name}</div>
    <div class="briefing">${selected.description}</div>
    <button class="back-btn" onclick="goBack()">← BACK</button>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add("visible"), 50);
}

function goBack() {
  const overlay = document.querySelector(".service-overlay");
  if (overlay) overlay.remove();
}

document.addEventListener("keydown", (e) => {
  const keysToBlock = ["ArrowUp", "ArrowDown", "Enter"];
  if (keysToBlock.includes(e.key)) {
    e.preventDefault();
  }
  if (e.key === "Enter") activateService();
  else if (e.key === "ArrowDown") nextService();
  else if (e.key === "ArrowUp") prevService();
}, { passive: false });
