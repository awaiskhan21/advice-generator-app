document.addEventListener("DOMContentLoaded", () => {
  const adviceText = document.getElementById("advice-text");
  const generateButton = document.getElementById("generate-advice");
  const heading = document.getElementsByTagName("h1")[0];

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip);
    adviceText.textContent = `"${data.slip.advice}"`;
    heading.textContent = `Advice #${data.slip.id}`;;

  };

  fetchAdvice();

  generateButton.addEventListener("click", () => {
    fetchAdvice();
  });
});
