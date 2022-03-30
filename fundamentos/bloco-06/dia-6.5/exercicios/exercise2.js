const menu = document.getElementById('menu');
const hamburguer = document.getElementById('checkbox-menu');

hamburguer.addEventListener('click', function() {

    if (hamburguer.checked == true) {
    menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }

}) 