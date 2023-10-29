const partySections = document.querySelectorAll('.party');
const confirmButton = document.getElementById('confirm-button');

partySections.forEach(section => {
    section.addEventListener('click', () => {
        // Remover la clase 'selected' de todos los partidos
        partySections.forEach(party => party.classList.remove('selected'));

        // Agregar la clase 'selected' solo al partido clickeado
        section.classList.add('selected');

        // Habilitar el botón de confirmación si se selecciona un partido
        confirmButton.removeAttribute('disabled');
    });
});
