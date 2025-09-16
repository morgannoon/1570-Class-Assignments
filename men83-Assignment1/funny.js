const moods = [
    { text: "Excited 🎉", emoji: "🥳", color: "#FFD166" },
    { text: "Chill 🌊", emoji: "😎", color: "#06D6A0" },
    { text: "Focused 🔍", emoji: "🤓", color: "#118AB2" },
    { text: "Silly 🤪", emoji: "🙃", color: "#EF476F" },
    { text: "Dreamy ✨", emoji: "😴", color: "#9D4EDD" },
    { text: "Motivated 💪", emoji: "🔥", color: "#FF6B6B" }
  ];

  const button = document.getElementById("generateMood");
  const moodText = document.getElementById("mood-text");
  const emoji = document.getElementById("emoji");

  button.addEventListener("click", () => {
    const mood = moods[Math.floor(Math.random() * moods.length)];
    moodText.textContent = mood.text;
    emoji.textContent = mood.emoji;
    document.body.style.background = mood.color;
  });