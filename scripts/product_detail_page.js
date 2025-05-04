// Item details
document.addEventListener("DOMContentLoaded", () => {
    const productId = localStorage.getItem("selectedProductId");

    if (!productId) return;

    fetch(`https://680fc19727f2fdac240f48af.mockapi.io/items/${productId}`)
        .then(res => res.json())
        .then(item => {
            const detailContainer = document.getElementById("product-details");

            detailContainer.innerHTML = `
                <div class="item-photos">
                    <div class="other-images-box">
                        <img src='${item.image}' class="other-image">
                        <img src='${item.image1}' class="other-image">
                        <img src='${item.image2}' class="other-image">
                    </div>
                    <div class="main-image-box">
                        <img id="main-image" src='${item.image}' class="main-image">
                    </div>
                </div>
                <div class="item-info" id="item-info">
                    <h2><b>${item.name}</b></h2>
                    <p><img src="images/ranking-stars.png" alt="ranking"> ${item.ranking}/5</p>
                    <h3>$${item.price}</h3>
                    <p>${item.info}</p>

                    <div class="options">
                        <div class="item-info-divider">
                            <p>Select Colors</p>
                            <div class="item-colors">
                                <img src="images/colors/item-color1.png" alt="color1">
                                <img src="images/colors/item-color2.png" alt="color1">
                                <img src="images/colors/item-color3.png" alt="color1">
                            </div>
                        </div>
                        
                        <div class="item-info-divider">
                            <p>Choose Size</p>
                            <div class="sizes">
                                <div>Small</div>
                                <div>Medium</div>
                                <div class="large">Large</div>
                                <div>X-Large</div>
                            </div>
                        </div>
                        
                        <div class="item-info-divider-add-cart">
                            <div class="add_into_cart">
                                <div><img src="images/minus.png" alt="minus"></div>
                                1
                                <div><img src="images/plus.png" alt="plus"></div>
                            </div>
                            <button>Add to Cart</button>
                        </div>
                    </div>

                </div>`;



            const otherImages = document.querySelectorAll(".other-image");
            const mainImage = document.getElementById("main-image");

            otherImages.forEach((image) => {
                image.addEventListener("click", () => {
                    mainImage.src = image.src;

                    otherImages.forEach((img) => {
                        img.style.border = "none";
                    });

                    image.style.border = "1px solid black";
                });
            });
        })
        .catch((error) => {
            console.log(error, "შეცდომა");
        });
});

// All Reviews
fetch("https://680fc19727f2fdac240f48af.mockapi.io/feedback")
    .then((res) => res.json())
    .then((CustomersReviews) => {
        const allReviews = document.getElementById("all-reviews");

        CustomersReviews.forEach((reviews) => {
            allReviews.innerHTML += `
            <div class="review">
                <div class="more">
                    <img src="images/ranking-stars.png" alt="ranking">
                    <img src="images/more.png" alt="more">
                </div>
                <h1>${reviews.name}<img src="images/check.png" alt="check"></h1>
                <p>${reviews.review}</p>
                <p class="date">${reviews.date}</p>
            </div>`;
        });
    })
    .catch((error) => {
        console.log(error, "შეცდომა");
    });



// You Might Also Like
fetch("https://680fc19727f2fdac240f48af.mockapi.io/items")
    .then((res) => res.json())
    .then((items) => {
        const alsoLikeContainer = document.getElementById("also-like-container");

        const alsoLike = items.slice(6, 10);

        alsoLike.forEach((item) => {
            alsoLikeContainer.innerHTML += `
            <div class="also-like-item">
                <img src='${item.image}' class="product-image">
                <div class="also-like-item-info">
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
