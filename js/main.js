document.addEventListener('DOMContentLoaded', () => {
    let burger = document.querySelector(".burger"),
        menu = document.querySelector(".burger__menu"),
        overlay = document.querySelector('.burger__overlay'),
        body = document.querySelector("body"),
        links = document.querySelectorAll(".burger__link");

    burger.addEventListener("click", function toggler() {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('burger__menu_active');
        overlay.classList.toggle('burger__overlay_active');
        body.classList.toggle('lock');
        links.forEach(item => {
            item.addEventListener("click", () => {
                if (burger.classList.contains("burger_active")) {
                    toggler();
                }
            })
        });
        window.addEventListener("click", (e) => {
            if (e.target === menu && burger.classList.contains("burger_active")) {
                toggler();
            }
        });
    });
})

let dots = document.querySelectorAll(".header__dot"),
    header = document.querySelector(".header"),
    headerTitle = document.querySelector(".header__title"),
    counter = 1;

let intros = {
    purple: 'url("/images/bgr/intro.jpg") 0 0 / cover no-repeat',
    green: 'linear-gradient(to right, #000, #51ff00)',
    yellow: 'linear-gradient(to right, #000, #f7e600)',
    red: 'linear-gradient(to right, #000, #ff0000)'
}

let sliderInterval = setInterval(styleChanger, 5000);

function styleChanger(){
    dots.forEach((item) => {
        item.classList.remove("header__dot_active");
    });
    dots[counter].classList.add("header__dot_active");
    if (counter < 3) {
        header.style.background = Object.values(intros)[counter];
    } else {
        header.style.background = Object.values(intros)[counter]; 
        counter = -1;
    }
    counter++;   
}

dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        clearInterval(sliderInterval);
        const target = e.target;
        dots.forEach((item, i) => {
            item.classList.remove("header__dot_active");
            if (target == item) {
                header.style.background = Object.values(intros)[i];  
            }
        });
        dot.classList.add("header__dot_active");
    });
});



