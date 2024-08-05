document.addEventListener('DOMContentLoaded', function() {

document.addEventListener('DOMContentLoaded', function() {
    const logoLink = document.getElementById('logo-link');
    
    logoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza la página al inicio
    });
});


    const btnFilter = document.querySelector('.icon-filter');
    const containerFilter = document.querySelector('.container-filters');
    const btnSearch = document.getElementById('btn-search');
    const searchInput = document.getElementById('search-input');
    const checkboxes = document.querySelectorAll('.group-type input[type="checkbox"]');
    const cards = document.querySelectorAll('.card-pokemon');

    // Toggle filter container visibility
    btnFilter.addEventListener('click', () => {
        containerFilter.classList.toggle('active');
    });

    // Add event listener to checkboxes to filter on change
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterPokemon);
    });

    // Add event listener to the search button
    btnSearch.addEventListener('click', filterPokemon);

    // Add event listener to the search input for Enter key
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita el comportamiento por defecto del Enter en formularios
            filterPokemon(); // Llama a la función de filtrado
        }
    });

    function filterPokemon() {
        const typeFilters = Array.from(document.querySelectorAll('.group-type input[type="checkbox"]'))
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.getAttribute('name'));

        const searchText = searchInput.value.trim().toLowerCase();

        cards.forEach(card => {
            const cardName = card.textContent.trim().toLowerCase();
            const cardTypes = Array.from(card.querySelectorAll('.card-types span'))
                .map(span => span.classList.value.trim().toLowerCase());

            const typeMatch = typeFilters.length === 0 || typeFilters.some(type => cardTypes.includes(type));
            const nameMatch = cardName.includes(searchText);

            if (typeMatch && nameMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
