// header, footer
function loadContent(id, file) {
    fetch(file)
        .then((res) => res.text())
        .then((html) => {
            document.getElementById(id).innerHTML = html;
        });
}
loadContent("header", "header.html");
loadContent("footer", "footer.html");