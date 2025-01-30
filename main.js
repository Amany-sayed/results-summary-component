document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const sContainer = document.getElementById("summary-container");

            data.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("score-row", item.category.toLowerCase());
                div.innerHTML = `
                    <img src="${item.icon}" alt="${item.category}">
                    <p>${item.category}</p>
                    <span>${item.score} / 100</span>
                `;
                sContainer.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});
