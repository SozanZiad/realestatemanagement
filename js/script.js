var btn = document.querySelector('.mn');
var menu = document.querySelector('.sidebar');


btn.addEventListener('click', function () {
    menu.style.display =
        menu.style.display === 'none' ? 'block' : 'none';
})



