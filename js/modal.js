'use strict';

const modal = document.querySelector('.popup')
const modalPopup = modal.querySelector('.popup-content')
const button = document.querySelector('.form-button')
const cancelButton = document.querySelector('.form-button-cancel')


button.addEventListener('click', () => {
    modal.style.display = "block"
})

cancelButton.addEventListener('click', () => {
    modal.style.display = 'none'
})

modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content')) {
        modal.style.display = 'none'
    }
})