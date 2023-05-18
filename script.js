const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownBtnTitle = document.querySelector('.dropdown__title');
const dropdownBtnIcon = document.querySelector('.dropdown__icon');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');

let dropdownValue = 'option'

dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list-active')
    dropdownBtnIcon.classList.toggle('dropdown__icon-active')
    dropdownBtn.classList.toggle('dropdown__btn-active')
})

function closeDropdown(){
    dropdownList.classList.remove('dropdown__list-active')
    dropdownBtnIcon.classList.remove('dropdown__icon-active')
    dropdownBtn.classList.remove('dropdown__btn-active')
}

function resetDropdonItems() {
    dropdownItem.forEach(item => {
        item.classList.remove('dropdown__item-active')
    })
}

dropdownItem.forEach(item =>
    item.addEventListener('click', () => {
        dropdownValue = item.getAttribute('data-value')
        dropdownBtnTitle.textContent = item.textContent;
        resetDropdonItems();
        item.classList.add('dropdown__item-active');
        closeDropdown();
    })
)

window.addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target !== dropdownBtn && e.target !== dropdownItem) {
        closeDropdown()
    }
})

/// creating result
const username = document.getElementById('username');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const toggle = document.getElementById('toggle');

const errorPassword = document.querySelector('.error-password')
const buttonNext = document.querySelector('.buttons__item-next');
let result = {}

function checkInputs(){
    if (username.value && password.value) {
        buttonNext.disabled = false
    } else {
        buttonNext.disabled = true
    }
}

username.addEventListener('input', () => {
    checkInputs()
})

password.addEventListener('input', () => {
    checkInputs()
})

function collectJSON(){
    result.username = username.value
    result.password = password.value
    result.remember = checkbox.checked
    result.toggle = toggle.checked
    result.radioSelection = document.querySelector('input[name="radio"]:checked').value
    result.dropdown = dropdownValue
}

buttonNext.addEventListener('click', (e) => {
    e.preventDefault()
    errorPassword.classList.remove('error-active')
    password.classList.remove('form__input-error')

    if (password.value.length < 4 || password.value.length > 12) {
        errorPassword.classList.add('error-active')
        password.classList.add('form__input-error')
        return
    }

    collectJSON()
    alert(JSON.stringify(result))
})