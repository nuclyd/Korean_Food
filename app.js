// JS for section #more form //

const subForm = document.querySelector('#subForm');
const email = document.querySelector('input[type="email"]');
const frequency = document.querySelector('#frequency');

subForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert(`Thank you! You will receive our newsletter ${frequency.value} at ${email.value}`);
}); 

email.addEventListener('input', function() {
    let emailInput = email.value;
    email.style.backgroundColor = 'white';
    for (let i = 0; i < emailInput.length; i++) {
    if (emailInput[i] === '@') {
        email.style.backgroundColor = 'green'; // only works when selecting the input type!
        break;
    } else if (emailInput[i] !== '@') {
        email.style.backgroundColor = 'red';
        email.style.color = 'white';
    }}
})