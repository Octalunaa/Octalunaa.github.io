// Desplazamiento suave al catálogo
document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
});
// Mensaje al agregar productos al carrito
const buttons = document.querySelectorAll('.product-card button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        alert('Producto agregado al carrito.');
    });
});