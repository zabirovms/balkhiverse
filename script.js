document.addEventListener('DOMContentLoaded', () => {
    const poetsContainer = document.getElementById('poetsContainer');
    const searchInput = document.getElementById('searchInput');

    let poets = [];

    // Fetch poets from JSON file
    fetch('poets.json')
        .then(response => response.json())
        .then(data => {
            poets = data;
            displayPoets(poets);
        })
        .catch(error => console.error('Error loading poets:', error));

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPoets = poets.filter(poet => 
            poet.name.toLowerCase().includes(searchTerm)
        );
        displayPoets(filteredPoets);
    });

    function displayPoets(poets) {
        poetsContainer.innerHTML = '';

        poets.forEach(poet => {
            const poetCard = document.createElement('div');
            poetCard.className = 'poet-card';
            poetCard.innerHTML = `<div class="poet-name">${poet.name}</div>`;
            
            poetCard.addEventListener('click', () => {
                localStorage.setItem('selectedPoet', JSON.stringify(poet));
                window.location.href = 'poet.html';
            });

            poetsContainer.appendChild(poetCard);
        });
    }
});
