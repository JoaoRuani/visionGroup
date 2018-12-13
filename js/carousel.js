carousel = document.querySelector(".carousel");
carouselItens = document.querySelectorAll(".card-carousel");
cont = 51;
var touching = false,
    startX,
    startY,
    dist,
    threshold = 150, //required min distance traveled to be considered swipe
    allowedTime = 200, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    swipediretion,
    distX;
carouselItens.forEach(function (element) {
    element.classList.add('d-none');
});
carouselItens[0].classList.remove('d-none');

carousel.addEventListener("touchstart", function (e) {
    var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        touching = true;
        e.preventDefault()
});
carousel.addEventListener("touchmove", function(e) {
    e.preventDefault();
});
carousel.addEventListener("touchend", function(e){
    var touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    elapsedTime = new Date().getTime() - startTime;
    if(elapsedTime <= allowedTime) {
        if(Math.abs(distX) >= threshold){
            swipediretion = (distX < 0) ? "left" : "right";
        }
    }
    console.log(swipediretion);
    if(swipediretion == 'left'){
        cont++;
        hideAll(carouselItens, carouselItens[cont % carouselItens.length]);
    }
    else if(swipediretion != undefined){
        cont--;
        hideAll(carouselItens, carouselItens[cont % carouselItens.length]); 
    }
    
    e.preventDefault();
});



setInterval(function () {
    if(!touching){
        cont++;
        hideAll(carouselItens, carouselItens[cont % carouselItens.length]);
    }
    touching = false;
}, 6000);

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

