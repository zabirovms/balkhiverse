// script.js
document.addEventListener('DOMContentLoaded', () => {
    const poetsContainer = document.getElementById('poetsContainer');
    const searchInput = document.getElementById('searchInput');
    
    // Fetch poets data
    fetch('poets.json')
        .then(response => response.json())
        .then(data => {
            poets = data;
            displayPoets(poets);
        });

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
            poetCard.innerHTML = `
                <img src="${poet.image}" class="poet-image" alt="${poet.name}">
                <div class="poet-name">${poet.name}</div>
            `;
            poetCard.addEventListener('click', () => {
                window.location.href = `poet.html?id=${poet.id}`;
            });
            poetsContainer.appendChild(poetCard);
        });
    }
});
