/*
Template Name: Spark - App Landing Page Template.
Author: GrayGrids
*/

// Preloader fadeout
function fadeout() {
    var preloader = document.querySelector('.preloader');
    if (!preloader) return;
    preloader.style.opacity = '0';
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 300);
}

// Video Modal Functions
function playVideo(videoSrc) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('serviceVideo');
    if (!modal || !video) return;
    video.src = videoSrc;
    modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) closeBtn.focus();
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

    // WOW disabled
    // new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });

    // Close the video modal when clicking the close button
    var closeEl = document.querySelector('.close');
    if (closeEl) {
        closeEl.addEventListener('click', function() {
            const modal = document.getElementById('videoModal');
            const video = document.getElementById('serviceVideo');
            if (!modal || !video) return;
            modal.style.display = "none";
            modal.setAttribute('aria-hidden', 'true');
            video.pause();
            video.currentTime = 0;
        });
        // keyboard support for close
        closeEl.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                closeEl.click();
            }
        });
    }

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

    // a11y: close modals on ESC and trap focus for video modal
    window.addEventListener('keydown', function(e) {
        const videoModal = document.getElementById('videoModal');
        if (videoModal && videoModal.style.display === 'block') {
            if (e.key === 'Escape') {
                const video = document.getElementById('serviceVideo');
                videoModal.style.display = 'none';
                video.pause();
                video.currentTime = 0;
            }
            if (e.key === 'Tab') {
                e.preventDefault();
                var closeBtn = videoModal.querySelector('.close');
                if (closeBtn) closeBtn.focus();
            }
        }
    });

})();

