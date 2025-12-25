const grid = document.getElementById("grid");

let currentSentence = "";

for (const char in DATA) {
  const btn = document.createElement("button");
  btn.innerText = char;
  btn.onclick = () => learn(char);
  grid.appendChild(btn);
}

function learn(char) {
  document.getElementById("char").innerText = char;
  document.getElementById("roman").innerText =
    "Pronunciation: " + DATA[char].roman;
  document.getElementById("sentence").innerText =
    "Sentence: " + DATA[char].sentence;

  currentSentence = DATA[char].sentence;
}

function speak() {
  if (!currentSentence) return;
  const u = new SpeechSynthesisUtterance(currentSentence);
  u.lang = "ko-KR";
  speechSynthesis.speak(u);
}
