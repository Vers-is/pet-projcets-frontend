document.addEventListener('DOMContentLoaded', function () {
    // ?????????? select ??? ?????? ? ????
    const selectMonth = document.getElementById('card-month');
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i < 10 ? '0' + i : i;
        option.textContent = option.value;
        selectMonth.appendChild(option);
    }

    const selectYear = document.getElementById('card-year');
    for (let i = new Date().getFullYear(); i <= new Date().getFullYear() + 10; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }

    // ???????? ?????
    const inputNumber = document.getElementById('card-number');
    const inputName = document.getElementById('card-name');
    const inputMonth = document.getElementById('card-month');
    const inputYear = document.getElementById('card-year');
    const inputCVV = document.getElementById('card-cvv');

    // ??????? ????????
    const numberField = document.getElementById('card-number-field');
    const nameField = document.getElementById('card-name-field');
    const expiryField = document.getElementById('card-expiry-field');
    const cvvField = document.getElementById('card-cvv-field');

    // ????????? ?????? ?? ??????? ????????
    function setFocus(targetField) {
        clearFocus();
        targetField.classList.add('card-focused');
    }

    // ????? ?????? ?? ???? ?????
    function clearFocus() {
        document.querySelectorAll('.card-focused').forEach(field => {
            field.classList.remove('card-focused');
        });
    }

    // ??????? ? ???? ?????
    function focusInput(input) {
        input.focus();
    }

    // ??????? ????? ?? ????????
    numberField.addEventListener('click', () => {
        focusInput(inputNumber);
        setFocus(numberField);
    });

    nameField.addEventListener('click', () => {
        focusInput(inputName);
        setFocus(nameField);
    });

    expiryField.addEventListener('click', () => {
        focusInput(inputMonth);
        setFocus(expiryField);
    });

    cvvField.addEventListener('click', () => {
        focusInput(inputCVV);
        setFocus(cvvField);
    });

    // ??????? ?????? ?? ?????
    inputNumber.addEventListener('focus', () => setFocus(numberField));
    inputName.addEventListener('focus', () => setFocus(nameField));
    inputMonth.addEventListener('focus', () => setFocus(expiryField));
    inputYear.addEventListener('focus', () => setFocus(expiryField));
    inputCVV.addEventListener('focus', () => setFocus(cvvField));

    // ?????? ?????? ??? ????? ??? ?????????
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.card-wrapper1, .card-wrapper2, .card_sub-wrapper') &&
            !e.target.closest('input, select')) {
            clearFocus();
        }
    });
});
