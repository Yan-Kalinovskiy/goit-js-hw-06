const inputEl = document.getElementById('name-input');
const nameEl = document.getElementById('name-output');

inputEl.addEventListener("input", (event) => {
  event.currentTarget.value.trim() === "" ? nameEl.textContent === "Anonymous" : nameEl.textContent = event.currentTarget.value;
});
