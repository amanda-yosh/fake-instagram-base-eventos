window.addEventListener('load', () => {
    let tagInputNomeUsuario = document.querySelector('.avatar-content>div');
    tagInputNomeUsuario.innerHTML = "<p>amanda.almeida</p>";
    // console.log(tagInputNomeUsuario)

    let inputsFormAuth = document.querySelectorAll('.form-auth input')
    //console.log(inputsFormAuth);
    let inputPrimeiroNome = inputsFormAuth[1];
    // console.log(inputPrimeiroNome);
    inputPrimeiroNome.setAttribute("placeholder","Digite seu primeiro nome");

    let tagInputNomeUsuarioByName = document.getElementsByName('name')[0];
    // console.log(tagInputNomeUsuarioByName);
    tagInputNomeUsuarioByName.setAttribute("placeholder","Seu primeiro nome aqui");


    function borda() {
        for (let i = 0; i < inputsFormAuth.length; i++) {
            inputsFormAuth[i].setAttribute("style", "border-radius:8px");
        }
    }
    borda();


    let elementBody = document.querySelector('body');
    elementBody.style.background = "#fafafa";


    let formAuth = document.querySelector('.form-auth');
    formAuth.style.cssText = "display: flex; flex-direction: column;";
})
