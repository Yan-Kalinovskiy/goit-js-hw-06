
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');
const ingredient = ingredients.map((element) => `<li><p class="item"><p/>${element}</li>`).join("");
listEl.insertAdjacentHTML('afterbegin', ingredient);
console.log(listEl);



