// Category page's items
fetch("https://680fc19727f2fdac240f48af.mockapi.io/items")
    .then((res) => res.json())
    .then((items) => {
        const casualContentContainer = document.getElementById("casual-content-container");

        const casualContent = items.slice(0, 9);

        casualContent.forEach((item) => {
            casualContentContainer.innerHTML += `
            <div class="casual-content-item" onclick="goToDetailS(${item.id})">
                <img src='${item.image}' class="product-image">
                <div class="casual-content-item-info">
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

// Items details
function goToDetailS(id) {
    localStorage.setItem("selectedProductId", id);
    window.location.href = "product_detail_page.html";
}


// Category page filters menu
const filtersResponsive = document.getElementById('filters-responsive');
const filters = document.querySelector('.filters');
const casual = document.querySelector('.casual');

const filtersCloseBtn = document.getElementById('filters-close-btn');

filtersResponsive.addEventListener('click', function () {
    filters.classList.add("filters-responsive-menue");
    casual.classList.add("hide-casual");
});

filtersCloseBtn.addEventListener('click', function () {
    filters.classList.remove("filters-responsive-menue");
    casual.classList.remove("hide-casual");
})