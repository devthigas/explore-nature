export default function modalInit(){
    const btnModal = document.querySelector('.modal-close')
    const modal = document.querySelector('.js-modal')
    const containerBlur = document.querySelector('.js-modal-blur')
    const form = document.querySelector('.modal-forms')

    function showModal(){
        modal.classList.add('active')
        containerBlur.classList.add('blur')

    }

    function closeModal(){
        modal.classList.remove('active')
        containerBlur.classList.remove('blur')
    }



    function saveLocalStorage(email){
        if(localStorage.getItem('email') === null){
            localStorage.setItem('email', email)
        }
    }

    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        saveLocalStorage(email)
        alert('Obrigado por se cadastrar!')
        closeModal()
    })

    btnModal.addEventListener('click', closeModal)

    if (!localStorage.getItem('email')){
        setTimeout(showModal, 1000)
    }
    
}