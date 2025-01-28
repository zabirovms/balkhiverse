document.addEventListener("DOMContentLoaded", function () {
    fetch("poets.json")
        .then(response => response.json())
        .then(data => {
            let poetList = document.getElementById("poet-list");
            data.poets.forEach(poet => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.href = poet.link;
                a.textContent = poet.name;
                li.appendChild(a);
                poetList.appendChild(li);
            });
        })
        .catch(error => console.error("Error loading poets:", error));
});
