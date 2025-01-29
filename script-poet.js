document.addEventListener('DOMContentLoaded', () => {
    const poet = JSON.parse(localStorage.getItem('selectedPoet'));

    if (!poet) {
        document.body.innerHTML = '<h1>Шоир ёфт нашуд!</h1>';
        return;
    }

    document.getElementById('poetName').textContent = poet.name;
    document.getElementById('poetDescription').textContent = poet.description;

    const poetWorks = document.getElementById('poetWorks');
    poet.works.forEach(work => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${work.title}:</strong> ${work.text}`;
        poetWorks.appendChild(li);
    });
});
