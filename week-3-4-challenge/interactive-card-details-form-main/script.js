function resetAll() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value='');

    let cardNumberContent = document.querySelector('.card-number');
    let cardHolderContent = document.querySelector('.card-holder');
    let cardExpiryMonthContent = document.querySelector('.card-expiry-month');
    let cardExpiryYearContent = document.querySelector('.card-expiry-year');
    let cardCvcContent = document.querySelector('.card-cvc');

    cardHolderContent.textContent = "Jane Appleseed"
    cardNumberContent.textContent = '0'.repeat(16).match(/.{1,4}/g)?.join(' ');
    cardExpiryMonthContent.textContent = '0'.repeat(2);
    cardExpiryYearContent.textContent = '0'.repeat(2);
    cardCvcContent.textContent = '0'.repeat(3);
}

window.onload = resetAll;

document.addEventListener("DOMContentLoaded", () => {
    const cardHolder = {
        el: document.querySelector('.card-holder-input'),
        content:  document.querySelector('.card-holder'),
        error: document.querySelector('.card-holder-input-error'),
        warning: document.querySelector('.card-holder-cant-be-blank-warning'),
        valid: false
    }
    const cardNumber = {
        el: document.querySelector('.card-number-input'),
        content: document.querySelector('.card-number'),
        error: document.querySelector('.card-number-input-error'),
        incomplete_error: document.querySelector('.card-number-incomplete-error'),
        warning: document.querySelector('.card-number-cant-be-blank-warning'),
        valid: false
    }
    const cardExpiryMonth = {
        el: document.querySelector('.card-expiry-month-input'),
        content: document.querySelector('.card-expiry-month'),
        error: document.querySelector('.card-expiry-input-error'),
        invalid_error: document.querySelector('.invalid-date-error'),
        warning: document.querySelector('.card-expiry-cant-be-blank-warning'),
        valid: false
    }
    const cardExpiryYear = {
        el: document.querySelector('.card-expiry-year-input'),
        content: document.querySelector('.card-expiry-year'),
        error: document.querySelector('.card-expiry-input-error'),
        warning: document.querySelector('.card-expiry-cant-be-blank-warning'),
        valid: false
    }
    const cardCVC = {
        el: document.querySelector('.card-cvc-input'),
        content: document.querySelector('.card-cvc'),
        error: document.querySelector('.card-cvc-input-error'),
        incomplete_error: document.querySelector('.card-cvc-incomplete-error'),
        warning: document.querySelector('.card-cvc-cant-be-blank-warning'),
        valid: false
    }


    function validateInput(element, type) {
        return function() {
            const value = element.el.value;
    
            if(type=='text' && !/^[a-zA-Z\s]*$/.test(value)) {
                element.el.style.borderColor="#ff5252";
                element.error.style.display='block';
                element.warning.style.display='none';
                element.valid=false;
            } else if(type=='number' && !/^[0-9\s]*$/.test(value)) {
                element.el.style.borderColor="#ff5252";
                element.error.style.display='block';
                element.warning.style.display='none';
                element.valid=false;
            } else if(value.trim() === '') {
                element.el.style.borderColor="#ff5252";
                element.warning.style.display='block';
                element.error.style.display='none';
                element.valid=false;
            } else {
                element.el.style.borderColor="#dedddf";
                element.error.style.display = element.warning.style.display = 'none';
                element.valid=true;
            }
        }
    }
    
    cardHolder.el.addEventListener('input', function(event) {
        cardHolder.content.textContent = event.target.value;

        validateInput(cardHolder, 'text')();
    });
    cardHolder.el.addEventListener('blur', validateInput(cardHolder, 'text'));
    
    cardNumber.el.addEventListener('input', function(event) {
        cardNumber.incomplete_error.style.display = 'none';
        let input = event.target.value;

        input = input.replace(/\s+/g, '');
        input = input.match(/.{1,4}/g)?.join(' ') || input;
        event.target.value = input;

        input = input.replace(/\s+/g, '');
        input = input.padEnd(16, '0');
        input = input.match(/.{1,4}/g)?.join(' ') || input;
        cardNumber.content.textContent = input;

        validateInput(cardNumber, 'number')();
    });
    cardNumber.el.addEventListener('blur', function(event) {
        let input = event.target.value;

        if(input.length > 0 && input.length < 19) {
            cardNumber.el.style.borderColor="#ff5252";
            cardNumber.incomplete_error.style.display = 'block';
            cardNumber.valid = false;
        } else {
            validateInput(cardNumber, 'number')();
        }
    });

    function validateDate(event) {
        let input = event.target.value;
            
        if(input > 12) {
            cardExpiryMonth.el.style.borderColor="#ff5252";
            cardExpiryMonth.invalid_error.style.display = 'block';
            cardExpiryMonth.valid = false;
        } else {
            cardExpiryMonth.invalid_error.style.display = 'none';
            validateInput(cardExpiryMonth, 'number')();
        }
    }
    cardExpiryMonth.el.addEventListener('input', function(event) {
        let input = event.target.value;
            
        validateDate(event);

        input = input.padStart(2, '0');
        cardExpiryMonth.content.textContent = input;

    });
    cardExpiryMonth.el.addEventListener('blur', function(event) {
        validateInput(cardExpiryMonth, 'number')();
        validateDate(event);
    });

    cardExpiryYear.el.addEventListener('input', function(event) {
        let input = event.target.value;

        input = input.padStart(2, '0');
        cardExpiryYear.content.textContent = input;
        
        validateInput(cardExpiryYear, 'number')();
    });
    cardExpiryYear.el.addEventListener('blur', validateInput(cardExpiryYear, 'number'));

    cardCVC.el.addEventListener('input', function(event) {
        cardCVC.incomplete_error.style.display = 'none';
        let input = event.target.value;

        input = input.padEnd(3, '0');
        cardCVC.content.textContent = input;

        validateInput(cardCVC, 'number')();
    });
    cardCVC.el.addEventListener('blur', function(event) {
        let input = event.target.value;

        if(input.length > 0 && input.length < 3) {
            cardCVC.incomplete_error.style.display = 'block';
        } else {
            validateInput(cardCVC, 'number')();
        }
    });
    
    const inputContainer = document.querySelector('.input-container');
    const confirmationContainer = document.querySelector('.confirmation-container');
    const confirmButton = document.querySelector('.confirmation-button');
    const continueButton = document.querySelector('.continue-button')

    confirmButton.addEventListener('click', (event) => {
        event.preventDefault();
        if(cardHolder.valid && cardNumber.valid && cardExpiryMonth.valid && cardExpiryYear.valid && cardCVC.valid) {
            inputContainer.style.display = 'none';
            confirmationContainer.style.display = 'flex';
        } else {
            if(cardHolder.el.value.trim() === '')
                validateInput(cardHolder, 'text')();
            if(cardNumber.el.value.trim() === '')
                validateInput(cardNumber, 'number')();
            if(cardExpiryMonth.el.value.trim() === '')
                validateInput(cardExpiryYear, 'number')();
            if(cardExpiryYear.el.value.trim() === '')
                validateInput(cardExpiryMonth, 'number')();
            if(cardCVC.el.value.trim() === '')
                validateInput(cardCVC, 'number')();
        }
    });

    continueButton.addEventListener('click', (event) => {
        event.preventDefault();
        inputContainer.style.display = 'block';
        confirmationContainer.style.display = 'none';

        resetAll();
    });
});