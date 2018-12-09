var menuButton = document.getElementsByClassName('navbar-toggler'),
    icon = document.getElementById('menu-icon'),
    isClosed = true;
// Icon change
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

var text = document.getElementById("title"),
    select = document.getElementById('user-type');
button = document.querySelectorAll('.register-button');

select.addEventListener('click', function () {
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

width = window.innerWidth;
searchInput = document.getElementById('search');
if (width > 400){
    select.classList.add('form-control-lg')
    searchInput.classList.add('form-control-lg')
}
window.addEventListener('resize', function () {
    width = window.innerWidth;
    if (width > 400){
        select.classList.add('form-control-lg');
        searchInput.classList.add('form-control-lg');
    }
    else{
        select.classList.remove('form-control-lg');
        searchInput.classList.remove('form-control-lg');
    }
})
