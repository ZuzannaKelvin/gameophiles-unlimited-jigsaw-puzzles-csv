// JavaScript to handle sticky behavior and smooth scrolling
window.onscroll = function() {stickyTOC()};

var toc = document.getElementById("toc");
var sticky = toc.offsetTop;

function stickyTOC() {
    if (window.pageYOffset > sticky) {
        toc.classList.add("sticky");
    } else {
        toc.classList.remove("sticky");
    }
}

// Smooth scrolling to sections when TOC links are clicked
document.querySelectorAll('.toc a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});