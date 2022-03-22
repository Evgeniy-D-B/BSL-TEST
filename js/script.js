document.addEventListener('click', function (e) {
    if (e.target.classList.contains("fa-plus")) {
        ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("fa-minus")) {
        --e.target.parentElement.querySelector("input").value;
    }
})

$(document).ready(function() {
    $('.product-info__detail-title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function() {
    $('.product-info__nutritions-title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
