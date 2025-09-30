document.addEventListener('DOMContentLoaded', function () {
    const anoSelect = document.getElementById('filter-ano');
    const searchInput = document.getElementById('filter-search');
    const cards = document.querySelectorAll('.publication-card');

    function searchPublicacoes() {
        const ano = anoSelect.value;
        const search = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const cardAno = card.getAttribute('data-ano');
            const cardText = card.innerText.toLowerCase();

            const matchAno = !ano || cardAno === ano;
            const matchSearch = !search || cardText.includes(search);

            if (matchAno && matchSearch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    anoSelect.addEventListener('change', searchPublicacoes);
    searchInput.addEventListener('input', searchPublicacoes);
});