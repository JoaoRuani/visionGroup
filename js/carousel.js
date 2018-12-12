carousel = document.querySelector(".carousel");
carouselItens = document.querySelectorAll(".card-carousel");
cont = 0;
carouselItens.forEach(function(element){
    element.classList.add('d-none');
});
carouselItens[0].classList.remove('d-none');

setInterval(function () {
    cont++;
    hideAll(carouselItens, carouselItens[cont % carouselItens.length]); 
}, 5000);

function show(item) {
    item.classList.remove("d-none");
    item.classList.remove("fadeout"); 
}
function hideAll(item, noremove) {
    item.forEach(function (element) {
        element.classList.add('fadeout');
        setTimeout(function () {
            element.classList.add("d-none");
            show(noremove);
        }, 1000);
    });
}

