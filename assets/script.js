// <!-------------------------- MENU NAV -------------------------------->


let navbar = document.querySelector('.header .nav-item');

document.querySelector('.menu-bnt').onclick = () => {
    navbar.classList.toggle('active');
};


// <!-------------------------- FROM CALANDER -------------------------------->

flatpickr("#myID", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});

// <!-------------------------- SLICK SLIDER -------------------------------->
$(document).ready(function () {
    $('.from-cards-home').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev pull-left'><img src="/assets/icon/CircleLeft.png" alt=""></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><img src="/assets/icon/CircleRight.png" alt=""></button>`,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    // draggable: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    draggable: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    draggable: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
});