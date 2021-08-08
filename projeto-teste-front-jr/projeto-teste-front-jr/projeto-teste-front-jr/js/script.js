    function validaformulario() {

        const conta = document.getElementById("conta");
        const agencia = document.getElementById("agencia");
        const senha = document.getElementById("senha");
        
        if (conta.value != "" && agencia.value != "" && senha.value != "") {
            alert("Seja bem-vindo(a) a sua conta!");
        } else {
            alert("Dados incorretos ou não preenchidos!");
        }
    }