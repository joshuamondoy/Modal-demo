const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector("#overlay");

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        // button.dataset.modalTarget will get the target/select element of the button being click which is the modal
        openModal(modal);
        
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal-container')
        //this will return the closest parent element that has the class name of modal-container
        closeModal(modal);
        
    })
})

overlay.addEventListener('click', () => {
    // it will select all the elements with .modal class
    const modals = document.querySelectorAll(".modal-container.active");
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
   if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    }

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
