const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById('value');
let counterValue = 0;

const decrementClick = () => {
  counterValue = counterValue -1;
  valueEl.textContent = counterValue;
};

const incrementClick = () => {
  counterValue = counterValue +1;
  valueEl.textContent = counterValue;
};


decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener("click", incrementClick);
