$(document).ready(function () {
    $(".like").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('fa-regular fa-heart');
        $(this).toggleClass('fa-solid fa-heart');
    });
});
