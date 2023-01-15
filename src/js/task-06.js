const textInput = document.getElementById('validation-input');

textInput.addEventListener('blur', () =>{

  if (textInput.value.trim().length === Number(textInput.getAttribute('data-length'))){
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
}
});


