document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.form-add').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var isValid = true;
        var mensajesError = [];

        var nombre = document.getElementById('nombre').value;
        if (nombre.trim() === '') {
            mensajesError.push('El campo Nombre es obligatorio.');
            isValid = false;
        }

        var precio = document.getElementById('precio').value;
        if (precio <= 0) {
            mensajesError.push('El precio debe ser mayor que 0.');
            isValid = false;
        }

        var stock = document.getElementById('stock').value;
        if (stock < 0) {
            mensajesError.push('El stock no puede ser negativo.');
            isValid = false;
        }

        var categoria = document.getElementById('categoria').value;
        if (categoria === '') {
            mensajesError.push('Debes seleccionar una categoría.');
            isValid = false;
        }

        
        if (!isValid) {
            alert('Errores:\n' + mensajesError.join('\n'));
        } else {
        
            alert('Formulario enviado con éxito');
        }
    });
});
