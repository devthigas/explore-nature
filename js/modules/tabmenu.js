export default function tabMenuInit(){

    const tabMenu = document.querySelectorAll('.js-menu li')
    const tabConteudo = document.querySelectorAll('.js-conteudo section')

    if(tabConteudo.length && tabConteudo.length){
        tabConteudo[0].classList.add('active')
        function activeTab(index){
            tabConteudo.forEach(item => {
                item.classList.remove('active')
            })
            tabConteudo[index].classList.add('active')
        }
    
        tabMenu.forEach((item, index) =>{
            item.addEventListener('click', () =>{
                activeTab(index)
            })
        })
    }

    }
   