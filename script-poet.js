// script-poet.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const poetId = urlParams.get('id');

    fetch('poets.json')
        .then(response => response.json())
        .then(poets => {
            const poet = poets.find(p => p.id == poetId);
            if(poet) {
                document.getElementById('poetName').textContent = poet.name;
                document.getElementById('poetImage').src = poet.image;
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
});
