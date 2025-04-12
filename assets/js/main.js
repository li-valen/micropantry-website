/*
Template Name: Spark - App Landing Page Template.
Author: GrayGrids
*/

// Video Modal Functions
function playVideo(videoSrc) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('serviceVideo');
    video.src = videoSrc;
    modal.style.display = "block";
    video.play();
}

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 2000);
    }



    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
          logo.src = 'assets/images/logo-black.png';
        } else {
          header_navbar.classList.remove("sticky");
          logo.src = 'assets/images/logo.png';
        }
        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // WOW active
    new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });

    // Close the modal when clicking the close button
    document.querySelector('.close').addEventListener('click', function() {
        const modal = document.getElementById('videoModal');
        const video = document.getElementById('serviceVideo');
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
    });

    // Close the modal when clicking outside the video
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('videoModal');
        if (event.target == modal) {
            const video = document.getElementById('serviceVideo');
            modal.style.display = "none";
            video.pause();
            video.currentTime = 0;
        }
    });

})();