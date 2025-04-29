// header, footer
function loadContent(id, file) {
    fetch(file)
        .then((res) => res.text())
        .then((html) => {
            document.getElementById(id).innerHTML = html;

            // hide first order ad
            if (id === "header") {
                document.getElementById("close-first-order").addEventListener("click", function () {
                    document.querySelector(".first-order").style.display = "none";
                });
            }

            // burger menu
            if (id === "header") {
                const burger = document.getElementById('burger');
                const menu = document.getElementById('drop-down-menu');

                burger.addEventListener('click', function () {
                    menu.classList.toggle("active")
                })
            }
        });
}

loadContent("header", "header.html");
loadContent("footer", "footer.html");

fetch("https://680fc19727f2fdac240f48af.mockapi.io/items")
    .then((res) => res.json())
    .then((items) => {
        const newArrivalsContainer = document.getElementById("new-arrivals-container");
        const topSellingContainer = document.getElementById("top-selling-container");

        const newArrivals = items.slice(0, 4);
        const topSelling = items.slice(4, 8);

        newArrivals.forEach((item) => {
            newArrivalsContainer.innerHTML += `
            <div class="new-arrivals-item">
                <img src='${item.image}' class="product-image">
                <div class="new-arrivals-item-info">
                    <h4>${item.name}</h4>
                    <p class="ranking"><img src="images/ranking-stars.png" alt="ranking">${item.ranking}/5</p>
                    <h3>$${item.price}</h3>
                </div>
            </div>`;
        });

        topSelling.forEach((item) => {
            topSellingContainer.innerHTML += `
            <div class="top-selling-item">
                <img src='${item.image}' class="product-image">
                <div class="top-selling-item-info">
                    <h4>${item.name}</h4>
                    <p class="ranking"><img src="images/ranking-stars.png" alt="ranking">${item.ranking}/5</p>
                    <h3>$${item.price}</h3>
                </div>
            </div>`;
        });
    })
    .catch((error) => {
        console.log(error, "შეცდომა");
    });