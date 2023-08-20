import './assets/scss/all.scss';
// import './assets/js/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
console.log("Hello world!");
$(document).ready(function () {
    $(".like").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fa-regular fa-heart');
        $(this).toggleClass('fa-solid fa-heart');
    });
});