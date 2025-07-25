
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
    const navLogo = document.getElementById("nav-logo");

    setTimeout(function () {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
            mainContent.style.display = "block";
            setTimeout(() => {
                mainContent.style.opacity = "1";
                navLogo.style.opacity = "1";
                navLogo.style.transform = "translateY(0)";
            }, 50);
        }, 1000);
    }, 2000);


    document.getElementById("close-btn").addEventListener("click", function () {
        const flashSale = document.getElementById("Flashsale");
        flashSale.style.display = "none";
    });


    const hamburger = document.querySelector("svg.cursor-pointer");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("close-mobile-menu");

    hamburger.onclick = () => {
        mobileMenu.classList.remove("translate-x-full");
        mobileMenu.classList.add("translate-x-0");
    };

    closeBtn.onclick = () => {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full");
    };


    const slider = document.getElementById("slider");
    const slides = slider.querySelectorAll("img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentIndex = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });


    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);




    const track = document.getElementById('cardTrack');
    const prev = document.getElementById('prevCard');
    const next = document.getElementById('nextCard');

    let scrollAmount = 0;
    const cardWidth = 272 + 16;

    next.addEventListener('click', () => {
        scrollAmount += cardWidth * 2;
        track.style.transform = `translateX(-${scrollAmount}px)`;
    });

    prev.addEventListener('click', () => {
        scrollAmount = Math.max(scrollAmount - cardWidth * 2, 0);
        track.style.transform = `translateX(-${scrollAmount}px)`;
    });

    const searchInput = document.getElementById("searchInput");
    const filterCheckboxes = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".card");

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const checkedCategories = Array.from(filterCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        cards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const category = card.dataset.category;

            const matchesSearch = title.includes(searchTerm);
            const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(category);

            if (matchesSearch && matchesCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", applyFilters);
    filterCheckboxes.forEach(cb => cb.addEventListener("change", applyFilters));






});

