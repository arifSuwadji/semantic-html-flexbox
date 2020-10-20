let modal = document.querySelector("#myModal");

let images = document.querySelectorAll(".featured-image");
let modalImg = document.querySelector("#zoom-image");
let captionText = document.querySelector("#caption");
for(let image of images){
    image.addEventListener('click', function(event){
        const target = event.target;
        modal.style.display = "block";
        modalImg.src = target.src;
        captionText.innerHTML = target.alt;
    });
}

let span = document.querySelector(".close");
span.addEventListener('click', function(){
    modal.style.display = "none";
});

//menu
window.onscroll = function() {myFunction()};

var header = document.querySelector("#myTopHeader");
var sticky = header.offsetTop + 30;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}

let nav = document.querySelector("#myTopHeader > nav > ul");
let slide = document.querySelector('#slide-menu');
slide.addEventListener('click', function(){
    this.classList.toggle("change");
    nav.classList.toggle("sidenav");
    if(nav.style.width === "350px"){
        nav.style.width = "";
    }else{
        nav.style.width = "350px";
    }
});

window.addEventListener("resize", function(){
    if (window.innerWidth < 1000) {
    } else {
        slide.classList.remove('change');
        nav.classList.remove('sidenav');
        nav.style.width = "";
    }
});

let ul = document.querySelectorAll("#myTopHeader > nav > ul > li")
for(let li of ul){
    li.addEventListener('click', function(event){
        const target = event.target;
        let arrHref = target.href.split('#');
        if(arrHref[1] === 'geografi'){
        }else if(arrHref[1] === 'pariwisata'){
        }else{
            slide.classList.remove('change');
            nav.classList.remove('sidenav');
            nav.style.width = "";
        }
    });
}