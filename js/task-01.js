const itemEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${itemEl.length}`);
itemEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent} \n Element: ${element.lastElementChild.children.length}`);
});

