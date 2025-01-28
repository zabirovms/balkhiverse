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
