$(document).ready(function () {
    $(".like").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fa-regular fa-heart');
        $(this).toggleClass('fa-solid fa-heart');
    });
    $('.up-hover').hover(function () {
        // over
        e.preventDefault();
        $(this).removeClass('up-hover');
        $(this).addClass('up-hover-after');
    }, function () {
        // out
        $(this).removeClass('up-hover-after');
        $(this).addClass('up-hover');
    }
    );
    $('.pulse-animate').hover(function () {
        // over
        
        $(this).addClass('animate__animated animate__pulse');
    }, function () {
        // out
        $(this).removeClass('animate__animated animate__pulse');
    });
});