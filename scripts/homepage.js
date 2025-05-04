// Top Selling, New Arrivals
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


// Reviews, swiper slides
fetch('https://680fc19727f2fdac240f48af.mockapi.io/feedback')
    .then(res => res.json())
    .then(reviews => {
        const wrapper = document.querySelector('.swiper-wrapper');

        reviews.forEach(review => {
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';

            slide.innerHTML = `
            <img src="images/review-stars.png" alt="review-stars">
            <h3>${review.name}<img src="images/check.png" alt="check"></h3>
            <p>${review.review}</p>
            `;
            wrapper.appendChild(slide);
        });

        new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 3,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            spaceBetween: 20,
            breakpoints: {
                0: { slidesPerView: 'auto' },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    })
    .catch((error) => {
        console.log(error, "შეცდომა");
    });