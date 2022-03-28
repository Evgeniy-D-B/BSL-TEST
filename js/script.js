let price = 4.99;
let sum = document.getElementById("sum");
let numericUpDown = document.getElementById("numericUpDown");
let up = document.getElementById("up");
let down = document.getElementById("down");

    up.onclick = () => {
        numericUpDown.value = (isNaN(numericUpDown.value)) ? 1 : +numericUpDown.value + 1;
        setSum();
    };
    down.onclick = () => {
        numericUpDown.value = (numericUpDown.value) > 0 ? +numericUpDown.value - 1 : 0;
        setSum();
    }

    numericUpDown.oninput = setSum;

    function setSum() {
        sum.innerText = (price * numericUpDown.value).toFixed(2);
    }
    

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
