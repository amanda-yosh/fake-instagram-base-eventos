window.onload = () => {

    //exercicio 1
    let btnMore = document.querySelector('#more');
    let card = document.querySelector('.card');
    let mainContainer = document.querySelector('.container.content');

    btnMore.style.cssText = "cursor:pointer;";

    btnMore.addEventListener('click', () => {
        let newCard = card.cloneNode(true);
        mainContainer.insertBefore(newCard, btnMore);
    })



    //exercicio 2
    let likes = document.querySelector('.likes >img');

    likes.style.cssText = "cursor:pointer;";
    
    likes.addEventListener('click', (evento) => {
        if (likes.src.includes("/img/red-heart.png")) {
            likes.src = '/img/icons/heart.svg';
    
            //exercicio 4
            likes.nextElementSibling.innerHTML = '1 likes'
        } 
        // if (likes.src.includes("/img/icons/heart.svg")) 
        else {
            likes.src = '/img/red-heart.png';
    
            //exercicio 4
            likes.nextElementSibling.innerText = '2 likes'
        }
    });



    //exercicio 3
    let barraPesquisa = document.querySelector('.busca');

    barraPesquisa.addEventListener('mouseover', () => {
        barraPesquisa.style.cssText = "box-shadow: 0px 1px 3px black;";
        // barraPesquisa.style.boxShadow = "0px 1px 3px black";
        // console.log('mouse over');
    })

    barraPesquisa.addEventListener('mouseout', () => {
        barraPesquisa.style.cssText = "box-shadow: none;";
        // barraPesquisa.style.boxShadow = "none";
        // console.log('mouse out');
    })
}