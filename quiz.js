// Quiz answers and concise feedback for the five question types.
const answers = {
  q1: { value: "frenemy", correct: "Correct! Frenemy means a person who is both a friend and a rival.", incorrect: "Not quite. The correct answer is Frenemy." },
  q2: { value: "screenfog", correct: "Correct! Screenfog is the project-coined compound noun.", incorrect: "Not quite. The correct spelling is screenfog." },
  q3: { value: "noun", correct: "Correct! Cyberbullying is a noun.", incorrect: "Not quite. Cyberbullying is a noun." },
  q4: { value: "prefixation", correct: "Correct! Cyberbullying is formed with the prefix cyber-.", incorrect: "Not quite. Cyberbullying is formed through prefixation." },
  q5: { value: "screenfog", correct: "Correct! Screen + fog forms screenfog.", incorrect: "Not quite. The correct spelling is screenfog." }
};

const form = document.querySelector("#quiz-form");
const result = document.querySelector("#quiz-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;

  Object.entries(answers).forEach(([name, answer]) => {
    const field = form.elements[name];
    const response = field.type === "radio"
      ? form.querySelector(`input[name="${name}"]:checked`)?.value
      : field.value.trim().toLowerCase();
    const isCorrect = response === answer.value;
    if (isCorrect) score += 1;
    const feedback = document.querySelector(`#feedback-${name}`);
    feedback.textContent = isCorrect ? answer.correct : answer.incorrect;
  });

  result.hidden = false;
  result.textContent = `Your score: ${score} out of 5. Review the feedback above, then try again if you like.`;
});

form.addEventListener("reset", () => {
  Object.keys(answers).forEach((name) => {
    document.querySelector(`#feedback-${name}`).textContent = "";
  });
  result.hidden = true;
  result.textContent = "";
});
