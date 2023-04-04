const username = document.querySelector('#name');
const password = document.querySelector('#pass');
const email = document.querySelector('#email');
const url = document.querySelector('#url');
const tel = document.querySelector('#tel');
const date = document.querySelector('#date');
const salary = document.querySelector('#salary');
let employeePayrollList = [];

const nameError = document.querySelector('#errormsg');
username.addEventListener('input', function val() {
  let nameRegex = new RegExp('^[A-Z]{1}[a-z]{2,}$');
  if (nameRegex.test(username.value)) {
    username.style.border = '2px solid green';
    nameError.style.visibility = 'hidden';
  } else {
    nameError.style.visibility = 'visible';
    username.style.border = 'none';
  }
});

const passError = document.querySelector('#errorpass');
password.addEventListener('input', function val() {
  let passRegex = new RegExp(
    '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=[^!@#$%^&*]*[!@#$%^&*][^!@#$%^&*])).{8,15}'
  );
  if (passRegex.test(password.value)) {
    password.style.border = '2px solid green';
    passError.style.visibility = 'hidden';
  } else {
    password.style.border = 'none';
    passError.style.visibility = 'visible';
  }
});
const mailError = document.querySelector('#mailerror');
email.addEventListener('input', function val() {
  let mailRegex = new RegExp('^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$');
  if (mailRegex.test(email.value)) {
    email.style.border = '2px solid green';
    mailError.style.visibility = 'hidden';
  } else {
    email.style.border = 'none';
    mailError.style.visibility = 'visible';
  }
});
const urlError = document.querySelector('#urlerror');
url.addEventListener('input', function val() {
  let urlRegex = new RegExp('^[w]{3}.[a-zA-Z0-9]+.[a-zA-Z]{2,3}$');
  if (urlRegex.test(url.value)) {
    url.style.border = '2px solid green';
    urlError.style.visibility = 'hidden';
  } else {
    url.style.border = 'none';
    urlError.style.visibility = 'visible';
  }
});
const telError = document.querySelector('#telerror');
tel.addEventListener('input', function val() {
  let telRegex = new RegExp('^[1-9]{1}[0-9]{9}$');
  if (telRegex.test(tel.value)) {
    tel.style.border = '2px solid green';
    telError.style.visibility = 'hidden';
  } else {
    tel.style.border = 'none';
    telError.style.visibility = 'visible';
  }
});

salary.addEventListener('input', () => {
  document.querySelector('#output').innerHTML = salary.value;
});

const btn = document.querySelector('#submit');
function submitForm() {
  // //Adding data from localstorage to array
  if (window.localStorage.key(0) !== null) {
    employeePayrollList = JSON.parse(
      window.localStorage.getItem('employeeData')
    );
  }

  let newPerson = {
    name: username.value,
    password: password.value,
    email: email.value,
    url: url.value,
    tel: tel.value,
    date: date.value,
    salary: salary.value,
  };

  employeePayrollList.push(newPerson);

  window.localStorage.setItem(
    'employeeData',
    JSON.stringify(employeePayrollList)
  );
}
// for (let index = 0; index < localStorage.length; index++) {
//   console.log(localStorage.getItem(localStorage.key(index)));
// }
