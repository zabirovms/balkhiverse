document.addEventListener('DOMContentLoaded', () => {
    const poet = JSON.parse(localStorage.getItem('selectedPoet'));
    
    if (poet) {
        document.getElementById('poetName').textContent = poet.name;
        document.getElementById('poetBio').textContent = poet.description;
        
        const worksContainer = document.getElementById('poetWorks');
        poet.works.forEach(work => {
            const div = document.createElement('div');
            div.className = 'poem';
            div.innerHTML = `
                <h3>${work.title}</h3>
                <pre>${work.text}</pre>
            `;
            worksContainer.appendChild(div);
        });
    }
});
