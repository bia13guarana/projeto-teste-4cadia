    function validaformulario() {

        var conta = document.getElementById("conta");
        var agencia = document.getElementById("agencia");
        var senha = document.getElementById("senha");
        
        if (conta.value != "" && agencia.value != "" && senha.value != "") {
        alert("Seja bem-vindo(a) a sua conta!");
        } else {
        alert("Dados incorretos ou não preenchidos!");
        }
    }