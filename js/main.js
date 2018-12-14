// Troca de textos
var text = document.getElementById("title"),
    select = document.getElementById('user-type'),
    button = document.querySelectorAll('.register-button');
    button.forEach(function(e) {
        e.href = 'www/cadastro-candidato/';
    });
select.addEventListener('input', function () {
    if (select.value == "candidato") {
        text.textContent = "PROCURANDO A VAGA IDEAL?";
        button.forEach(function (e) {
            e.textContent = 'CADASTRAR MEU CURRÍCULO!';
            e.href = 'www/cadastro-candidato/';
        });
    }
    else {
        text.textContent = "PROCURANDO O CANDIDATO IDEAL?";
        button.forEach(function (e) {
            e.textContent = 'CADASTRAR MINHA EMPRESA!';
            e.href = 'www/cadastro-empresa/';
        });
    }
});

//Show modal
searchButton = document.querySelector(".search-button");
searchButton.addEventListener('click', function (e) {
    if (select.value == "empresa" && !logged) {
        e.preventDefault();
        $('.modal').modal('show');
    }
});



