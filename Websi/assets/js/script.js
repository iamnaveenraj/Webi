/*
=========================================
Anamika Jha Website
script.js
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        Sticky Navbar
    =====================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /*=====================================
        Mobile Menu
    =====================================*/

    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("show");

            menuBtn.classList.toggle("active");

        });

    }


    /*=====================================
        Close Mobile Menu
    =====================================*/

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            if (nav.classList.contains("show")) {

                nav.classList.remove("show");

                if (menuBtn) {
                    menuBtn.classList.remove("active");
                }

            }

        });

    });


    /*=====================================
        Smooth Scroll
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    /*=====================================
        Scroll Reveal Animation
    =====================================*/

    const reveals = document.querySelectorAll(

        ".card, .grid, .hero-content, section h2, .about-preview img"

    );

    function revealElements() {

        const windowHeight = window.innerHeight;

        reveals.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < windowHeight - 120) {

                element.classList.add("show");

            }

        });

    }

    revealElements();

    window.addEventListener("scroll", revealElements);


    /*=====================================
        Active Navigation
    =====================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.clientHeight;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    /*=====================================
        Counter Animation
    =====================================*/

    const counters = document.querySelectorAll(".counter");

    let counterStarted = false;

    function startCounter() {

        if (counterStarted) return;

        const trigger = document.querySelector(".counter-section");

        if (!trigger) return;

        if (window.scrollY + window.innerHeight >

            trigger.offsetTop + 100) {

            counterStarted = true;

            counters.forEach(counter => {

                const target = +counter.dataset.target;

                let count = 0;

                const speed = target / 100;

                function update() {

                    count += speed;

                    if (count < target) {

                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(update);

                    } else {

                        counter.innerText = target;

                    }

                }

                update();

            });

        }

    }

    window.addEventListener("scroll", startCounter);


    /*=====================================
        Scroll To Top Button
    =====================================*/

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.className = "scroll-top";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /*=====================================
        Fade Hero Text
    =====================================*/

    const hero = document.querySelector(".hero-content");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        hero.style.opacity = 1 - window.scrollY / 600;

        hero.style.transform =

            `translateY(${window.scrollY * 0.2}px)`;

    });


    /*=====================================
        Lazy Load Images
    =====================================*/

    const lazyImages = document.querySelectorAll("img[data-src]");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const img = entry.target;

                    img.src = img.dataset.src;

                    img.removeAttribute("data-src");

                    observer.unobserve(img);

                }

            });

        });

        lazyImages.forEach(img => observer.observe(img));

    }


    /*=====================================
        Current Year
    =====================================*/

    const year = document.querySelector(".current-year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});

/* =====================================
   Floating Buttons
===================================== */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});