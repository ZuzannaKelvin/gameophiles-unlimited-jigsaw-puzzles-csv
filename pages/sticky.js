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

document.addEventListener('DOMContentLoaded', function() {
    // Select all TOC links
    const tocLinks = document.querySelectorAll('.toc a');
    // Select the TOC container
    const toc = document.querySelector('.toc');

    tocLinks.forEach(link => {
        link.addEventListener('click', function() {
            // After clicking a TOC link, set the TOC opacity to 0.2
            toc.style.opacity = '0.2';
        });
    });
});