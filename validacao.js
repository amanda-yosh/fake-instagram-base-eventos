window.addEventListener('load', () => {

    //adicionando input type="date"
    let btnEnviar = document.querySelector('.form-auth button');
    let inputDataNascimento = document.createElement('input');
    inputDataNascimento.type = "date";
    inputDataNascimento.name = "data-de-nascimento";
    btnEnviar.insertAdjacentElement('beforebegin', inputDataNascimento);



    //validacao do formulário
    btnEnviar.addEventListener('click', (evento) => {

        evento.preventDefault();

        let form = document.querySelector('.form-auth');
    
        let inputEmail = document.getElementsByName('email');
        // console.log(inputEmail) //NodeList
        // inputEmail = inputEmail[0];
        // console.log(inputEmail) //input
        inputEmail[0].min = 10;
        inputEmail[0].max = 180;
    
        let inputNome = document.getElementsByName('name');
        inputNome[0].min = 2;
        inputNome[0].max = 80;
        // console.log(inputNome[0])

        let inputSobrenome = document.getElementsByName('surname');
        inputSobrenome[0].min = 2;
        inputSobrenome[0].max = 100;

        let username = document.getElementsByName('username');
        username[0].min = 10;
        username[0].max = 15;

        let senha = document.getElementsByName('password');
        senha[0].min = 8;
        senha[0].max = 100;
        // var regex = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";

        let dataNascimento = document.getElementsByName('data-de-nascimento');
        console.log(dataNascimento[0].value)
        //entre 16 e 120anos
        
        let inputs = document.querySelectorAll('.form-auth input');
        inputs.forEach( (input) => {
            input.style.borderColor = "gray";
        })
        
        if (!inputEmail[0].value.includes('@') && !inputEmail[0].value.includes('.')) {
            inputEmail[0].style.borderColor = "red";
        }
        else if (inputNome[0].value.length < 3) {
            inputNome[0].style.borderColor = "red";
        }
        else if (inputSobrenome[0].value.length < 3) {
            inputSobrenome[0].style.borderColor = "red";
        }
        else  if (username[0].value.length < 6) {
            username[0].style.borderColor = "red";
        }
        else if (senha[0].value.length < 8) {
            alert("Sua senha deve conter mínimo de oito caracteres");
        }
        // else if (dataNascimento[0].value < '2003-01-01') {
        //     alert('menor de idade');
        // }
        else {
            form.submit();
        }
    })
})
    