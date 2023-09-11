export default function accordionInit(){
    const faqList = document.querySelectorAll('.js-accordion dt')

    if(faqList.length){
    faqList.forEach(item => {
        item.addEventListener('click', () =>{
            item.classList.toggle('active')
            item.nextElementSibling.classList.toggle('active')
        })
    })

}

}