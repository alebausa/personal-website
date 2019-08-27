var sentences = [
  "UX/UI design",
  "The latest HTML5 accessible standards",
  "Progressive Web Apps developement",
  "Fast and optimized Single Page Apps",
  "Improve your brand image through SEO and SEM positioning",
  "Community managing and brand positioning",
  "Agile developing"
];

function getRandomSentence(arr) {
  let phrase = arr[Math.floor(Math.random() * arr.length)];
  document.getElementById("randomSentence").innerText = phrase;
}

window.setTimeOut(window.setInterval(getRandomSentence(sentences), 3000), 500);
