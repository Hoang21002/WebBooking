let navbar = document.querySelector('.header .nav-item');

document.querySelector('.menu-bnt').onclick = () => {
    navbar.classList.toggle('active');
};

flatpickr("#myID", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});