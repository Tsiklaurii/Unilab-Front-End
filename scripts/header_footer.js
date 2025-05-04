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
                const dropDownClose = document.getElementById('drop-down-menu-close');
                const menu = document.getElementById('drop-down-menu');

                burger.addEventListener('click', function () {
                    menu.classList.add("active")
                })
                dropDownClose.addEventListener('click', function () {
                    menu.classList.remove("active");
                })
            }
        });
}

loadContent("header", "header.html");
loadContent("footer", "footer.html");