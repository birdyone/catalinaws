
const terminalLines = [
  "> Initializing Catalina.js...",
  "> Connecting to Goldsmiths.edu...",
  "> Loading portfolio content...",
  "> Access granted ✅\n"
];

const aboutText = `👋 Hey there! I'm Catalina Jorquera 
 💎developer by trade, designer at heart. I code things that look good and work even better.
🧠 Currently diving deep into Computer Science at Goldsmiths, University of London.
🎓 Certified by MIT, Harvard, Oxford & Cambridge (yes, all of them 🤓).
💻 Full Stack Dev — fluent in JavaScript, React, Next.js, Python...
🎨 I mix code with creativity: UX/UI, branding, and building delightful experiences.
🍵 Matcha-fueled and idea-obsessed — let's build cool things!`;

const typingContainer = document.getElementById("about-typing");
const section = document.getElementById("about");

let index = 0;
let lineIndex = 0;
let fullText = "";
let hasTyped = false;

const typeSound = new Audio("https://www.soundjay.com/button/beep-07.wav");

function writeTerminalIntro() {
  if (lineIndex < terminalLines.length) {
    fullText += terminalLines[lineIndex] + "\n";
    typingContainer.textContent = fullText;
    typeSound.volume = 0.2;
    typeSound.play();
    lineIndex++;
    setTimeout(writeTerminalIntro, 1000);
  } else {
    section.classList.add("shake");
    setTimeout(() => section.classList.remove("shake"), 300);
    setTimeout(writeMainText, 800);
  }
}

function writeMainText() {
  if (index < aboutText.length) {
    typingContainer.textContent += aboutText.charAt(index);
    typeSound.currentTime = 0;
    typeSound.play();
    index++;
    setTimeout(writeMainText, 25);
  } else {
    hasTyped = true;
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasTyped) {
      fullText = "";
      typingContainer.textContent = "";
      index = 0;
      lineIndex = 0;
      writeTerminalIntro();
    }
  });
}, { threshold: 0.5 });

observer.observe(section);


document.addEventListener("DOMContentLoaded", function () {
  const terminal = document.getElementById("terminal-output");
  const text = `booting Catalina's portfolio...\n> Access granted.\n> Running showcase.js...\n\n> Hello world! Welcome to the terminal.`;
  const keySound = document.getElementById("keySound");
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      terminal.textContent += text.charAt(i);
      if (text[i] !== ' ' && text[i] !== '\n') {
        keySound.currentTime = 0;
        keySound.play();
      }
      i++;
      setTimeout(typeChar, 60);
    }
  }

  setTimeout(typeChar, 1000);
});
