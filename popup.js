document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const content = e.target.result;
        // Process the content of the file
      };
      reader.readAsText(file);
    }
  });

document.getElementById("question1").addEventListener("click", function () {
  // Suppose you have a function that processes the file content and counts mentions of 'React'
  const count = countMentions("React", fileContent);
  displayAnswer(`'React' was mentioned ${count} times.`);
});

function countMentions(word, text) {
  const wordRegex = new RegExp(word, "gi");
  const matches = text.match(wordRegex);
  return matches ? matches.length : 0;
}

function displayAnswer(answer) {
  const answersDiv = document.getElementById("answers");
  answersDiv.textContent = answer; // Display the answer in the 'answers' div
}
