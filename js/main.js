var menuButton = document.getElementsByClassName('navbar-toggler'),
    icon = document.getElementById('menu-icon'),
    isClosed = true;


menuButton[0].addEventListener('click', function(){
    if(isClosed){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        isClosed = false;
    }
    else{
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        isClosed = true; 
    }
});

