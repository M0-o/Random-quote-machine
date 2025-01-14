const colorGen = function () {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r},${g},${b})`;
};

const quoteCtn = document.querySelector("#Quote");
const authorCtn = document.querySelector("#Author");
const btn = document.querySelector("#Generate");
const card = document.querySelector("#container");
const colorChangingEl = document.querySelectorAll(".color_change");
const bgColorChangingEl = document.querySelectorAll(".bg_color_change");

const update = async function () {
  btn.disabled = true;
  const quotePromise = await fetch("/quote");
  let quote = await quotePromise.json();
  const color = colorGen();
  setTimeout(function () {
    quoteCtn.innerHTML = `<i class="fa-solid fa-quote-left icon"></i>  ${quote.text}`;
  }, 300);

  authorCtn.innerHTML = `- ${quote.author == null ? "Unknown" : quote.author}`;

  colorChangingEl.forEach((el) => (el.style.color = color));
  bgColorChangingEl.forEach((el) => (el.style.backgroundColor = color));
  card.classList.remove("fade-in");
  quoteCtn.classList.remove("fade-out");
  // Force reflow
  void card.offsetWidth;
  void quoteCtn.offsetWidth;
  card.classList.toggle("fade-in");
  quoteCtn.classList.toggle("fade-out");
  setTimeout(function () {
    card.classList.add("fade-in");
    quoteCtn.classList.add("fade-out");
    btn.disabled = false;
  }, 100);
};

btn.addEventListener("click", update);
