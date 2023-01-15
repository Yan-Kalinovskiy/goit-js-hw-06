const formEl = document.querySelector('.login-form');


formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  const {
    elements: {email, password}
  } = event.currentTarget;
  
  if (email.value.trim()==="" || password.value.trim()==="" ){
    alert("Всі поля повинні бути заповнені");
  } else {
    const objData = {
      email: `${email.value.trim()}`,
      password: `${password.value.trim()}`,
    }; 
console.log(objData);
  formEl.reset();
  }
} 



