/*Variáveis que indicam se o usuário está logado, se é uma empresa, 
o texto para as opções da compania e o texto para usuários*/
var logged = true,
    isCompany = true,
    textCompany = ["Painel Administrativo", "Candidatos", "Vagas Abertas"],
    textUsers = ["Painel Administrativo", "Currículo", "Vagas Aplicadas"];


// Icon change
var menuButton = document.getElementsByClassName('navbar-toggler'),
    icon = document.getElementById('menu-icon'),
    isClosed = true;

menuButton[0].addEventListener('click', function () {
    if (isClosed) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        isClosed = false;
    }
    else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        isClosed = true;
    }
});

// Troca de textos
var text = document.getElementById("title"),
    select = document.getElementById('user-type'),
    button = document.querySelectorAll('.register-button');
select.addEventListener('input', function () {
    if (select.value == "candidato") {
        text.textContent = "PROCURANDO A VAGA IDEAL?";
        button.forEach(function (e) {
            e.textContent = 'CADASTRAR MEU CURRÍCULO!';
        });
    }
    else {
        text.textContent = "PROCURANDO O CANDIDATO IDEAL?";
        button.forEach(function (e) {
            e.textContent = 'CADASTRAR MINHA EMPRESA!';
        });
    }
});

// Logged users and options
profileOptions = document.querySelectorAll('.profile-option');
profile = document.querySelector('.profile-logged');
if (!logged) {
    profile.classList.add('d-none');
}
else {
    if (isCompany) {
        for (i = 0; i < profileOptions.length; i++) {
            profileOptions[i].textContent = textCompany[i];
        }
    }
    else {
        for (i = 0; i < profileOptions.length; i++) {
            profileOptions[i].textContent = textUsers[i];
        }
    }
}


//Show modal
searchButton = document.querySelector(".search-button");
searchButton.addEventListener('click', function (e) {
    if (select.value == "empresa" && !logged) {
        e.preventDefault();
        $('.modal').modal('show');
    }
});


//Resize inputs
width = window.innerWidth;
searchInput = document.getElementById('search');
if (width > 400) {
    select.classList.add('form-control-lg')
    searchInput.classList.add('form-control-lg')
}
window.addEventListener('resize', function () {
    width = window.innerWidth;
    if (width > 400) {
        select.classList.add('form-control-lg');
        searchInput.classList.add('form-control-lg');
    }
    else {
        select.classList.remove('form-control-lg');
        searchInput.classList.remove('form-control-lg');
    }
})
