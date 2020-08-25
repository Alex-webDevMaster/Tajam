document.addEventListener('DOMContentLoaded', () => {
    // Burger
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


    //Slider
    let dots = document.querySelectorAll(".header__dot"),
        header = document.querySelector(".header"),
        sliderInterval = setInterval(styleChanger, 5000),
        counter = 1;
        intros = {
            purple: 'url("/images/bgr/intro.jpg") 0 0 / cover no-repeat',
            green: 'linear-gradient(120deg, #000 45%, #51ff00)',
            yellow: 'linear-gradient(120deg, #000 45%, #f7e600)',
            red: 'linear-gradient(120deg, #000 45%, #ff0000)'
        }

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

    //Works generator
    const panel = document.querySelector(".works__item-panel");

    for (let i = 0; i < 12; i++) {
        let work = document.createElement("div");
        work.classList.add("works__item");
        let color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        work.style.backgroundColor = color;
        panel.append(work);
    }

    // Comments slider
    const wrapper = document.querySelector(".comments__slider-wrapper"),
          inner = document.querySelector(".comments__slider-inner"),
          width = window.getComputedStyle(wrapper).width,
          slides = document.querySelectorAll(".comments__slider-item"),
          faces = document.querySelectorAll(".comments__responder"),
          facesPanel = document.querySelector(".comments__responder-panel");

    inner.style.width = 100 * slides.length + '%';
    inner.style.display = 'flex';
    inner.style.transition = '0.8s all';
    wrapper.style.overflow = 'hidden';
    
    slides.forEach(slide => {
        slide.style.width = width;
    });

    facesPanel.addEventListener("click", function(e) {
        let target = e.target;
        if (target.hasAttribute("alt")) {
            faces.forEach(item => {
                item.classList.remove("comments__responder_active");
            });
            target.parentElement.classList.add("comments__responder_active");
        }
        let offset = (target.parentElement.dataset.slideTo - 1) * parseInt(width, 10);
        inner.style.transform = `translateX(-${offset}px)`;
    });
}); 