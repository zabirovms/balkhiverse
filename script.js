document.addEventListener('DOMContentLoaded', () => {
    const poetsContainer = document.getElementById('poetsContainer');
    const searchInput = document.getElementById('searchInput');
    
    // Sample poets data (no images)
    const poets = [
        {
            id: 1,
            name: "Рӯдакӣ",
            description: "Абӯабдуллоҳ Рӯдакӣ - асосгузори адабиёти форсу тоҷик.",
            works: [
                { title: "Ғазалҳо", text: "Биёед ёрон якчу ёд кунем..." }
            ]
        },
        {
            id: 2,
            name: "Фирдавсӣ",
            description: "Ҳаким Абулқосим Фирдавсӣ - эҷодгари Шоҳнома.",
            works: [
                { title: "Шоҳнома", text: "Бином номи китоб Шоҳномаст..." }
            ]
        }
    ];

    // Load poets
    displayPoets(poets);

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
                <div class="poet-name">${poet.name}</div>
            `;
            poetCard.addEventListener('click', () => {
                localStorage.setItem('selectedPoet', JSON.stringify(poet));
                window.location.href = 'poet.html';
            });
            poetsContainer.appendChild(poetCard);
        });
    }
});
