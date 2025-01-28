<!DOCTYPE html>
<html lang="tg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adabiyoti Tojik - گنجینه ادبیات تاجیک</title>
  <meta name="description" content="مجموعه اشعار کلاسیک و معاصر تاجیکستان">
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navigation -->
  <nav>
    <h1>آدبیاتی تاجیک</h1>
    <div class="search-box">
      <input type="text" id="searchInput" placeholder="Ҷустуҷӯ...">
      <button onclick="searchPoems()">Ҷустуҷӯ</button>
    </div>
  </nav>

  <!-- Authors & Poems -->
  <div class="container">
    <div class="poet-list">
      <h2>Шоирон</h2>
      <ul id="poetList"></ul>
    </div>

    <div class="poem-viewer">
      <h2 id="poemTitle">Назми интихобшуда</h2>
      <div id="poemContent" class="poem-text"></div>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>© 2024 Adabiyoti Tojik. Ҳама ҳуқуқҳо ҳифз шудаанд.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
/* Base Styles */
body {
  font-family: 'Noto Naskh Arabic', serif;
  direction: rtl;
  margin: 0;
  padding: 0;
  background: #f5eee6;
  color: #2c3e50;
}

nav {
  background: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav h1 {
  font-size: 2rem;
  margin: 0;
}

.search-box {
  margin: 1rem auto;
  width: 80%;
}

input, button {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background: #3498db;
  color: white;
  cursor: pointer;
}

.container {
  display: flex;
  padding: 1rem;
}

.poet-list {
  width: 30%;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-left: 1rem;
}

.poem-viewer {
  width: 70%;
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

.poem-text {
  white-space: pre-line;
  line-height: 2;
  font-size: 1.2rem;
}

footer {
  text-align: center;
  padding: 1rem;
  background: #2c3e50;
  color: white;
}
// Sample Data (Replace with Tajik poems from JSON)
const poets = [
  {
    id: 1,
    name: "Абӯабдуллоҳ Рӯдакӣ",
    poems: [
      {
        title: "Бӯи ҷӯи Мӯлиён ояд ҳамӣ",
        content: `Бӯи ҷӯи Мӯлиён ояд ҳамӣ,
Яд дорам ҳар он ки дар ӯст ҳамӣ,
Бар намоянд аз он бӯи нағзӣ,
К-аз дилам хок барсарояд ҳамӣ.`
      }
    ]
  },
  {
    id: 2,
    name: "Садриддин Айнӣ",
    poems: [
      {
        title: "Ватан",
        content: `Ватан ман аст ин хоки пуронур,
Ватан ман аст ин оби равону зулол,
Ватан ман аст ин хар касе ки дар ин ҷо,
Зи хок аст ва бар хок хоҳад шуд.`
      }
    ]
  }
];

// Load Poets
document.addEventListener('DOMContentLoaded', () => {
  const poetList = document.getElementById('poetList');
  poets.forEach(poet => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#" onclick="showPoem(${poet.id})">${poet.name}</a>`;
    poetList.appendChild(li);
  });
});

// Show Poem
function showPoem(poetId) {
  const poet = poets.find(p => p.id === poetId);
  const poem = poet.poems[0]; // Show first poem for demo
  document.getElementById('poemTitle').textContent = poem.title;
  document.getElementById('poemContent').textContent = poem.content;
}

// Search Function
function searchPoems() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  // Add search logic here
  alert("Ҷустуҷӯ дар ин версияи намоишӣ дастнорас аст!");
}
