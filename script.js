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