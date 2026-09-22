'use strict';

const modal = document.querySelector('.popup')
const modalPopup = modal.querySelector('.popup-content')
const button = document.querySelector('.form-button')


button.addEventListener('click', () => {
    modal.style.display = "block"
})

modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content')) {
        modal.style.display = 'none'
    }
})