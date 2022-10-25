// preloader start
document.body.style.position = "fixed";
window.addEventListener("load", () => {
    document.body.style.position = "";
    document.querySelector(".loader").style.display = "none";
});
// preloader end

// sticky header start
window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("sticky", window.scrollY > 100);
});
// sticky header end

// dark/light toggle start
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    document.querySelector(".light-dark-toggle i").className = "fa-solid fa-sun";
    document.querySelector("#banner-section").classList.add("dark-banner-bg");
    document.querySelector(".banner-img").classList.add("dark-img");
    document.querySelector(".feature-img").classList.add("dark-img");
    document.querySelector(".logo-container img").src = "assets/img/logo-2.png";
    document.querySelector(".offcanvas-title").src = "assets/img/logo-2.png";

    document.querySelectorAll(".client-logo").forEach((singleLogo) => {
        singleLogo.classList.add("dark-icon");
    });

    document.querySelectorAll(".single-service img").forEach((singleIcon) => {
        singleIcon.classList.add("dark-icon");
    });

    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    document.querySelector(".light-dark-toggle i").className = "fa-solid fa-moon";
    document.querySelector("#banner-section").classList.remove("dark-banner-bg");
    document.querySelector(".banner-img").classList.remove("dark-img");
    document.querySelector(".feature-img").classList.remove("dark-img");
    document.querySelector(".logo-container img").src = "assets/img/logo.png";
    document.querySelector(".offcanvas-title").src = "assets/img/logo.png";

    document.querySelectorAll(".client-logo").forEach((singleLogo) => {
        singleLogo.classList.remove("dark-icon");
    });

    document.querySelectorAll(".single-service img").forEach((singleIcon) => {
        singleIcon.classList.remove("dark-icon");
    });

    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
}

document.querySelector(".light-dark-toggle").addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
// dark/light toggle end

// back to top start
document.querySelector(".back__to__top").addEventListener("click", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
    document.querySelector(".back__to__top").classList.toggle("active", window.scrollY > document.querySelector("#banner-section").clientHeight);
});
// back to top end

// Animation On Scroll start
AOS.init({
    duration: 1000,
});
// Animation On Scroll end

document.getElementById("demo").addEventListener("click", (vid) => {
    document.getElementById("popup-video").style.display = "block";
});

document.querySelector("#popup-video span").onclick = () => {
    document.getElementById("popup-video").style.display = "none";
};

const popupImage = document.getElementById("popup-image");
const selectedImage = document.getElementById("selected-img");
const expand = document.querySelectorAll(".single-portfolio-info svg");

for (let i = 0; i < expand.length; i++) {
    const element = expand[i];
    element.addEventListener("click", () => {
        popupImage.style.display = "block";
        selectedImage.src = `assets/img/portfolios/portfolio-${i}.jpg`;
    });
}

document.querySelector("#popup-image span").onclick = () => {
    document.getElementById("popup-image").style.display = "none";
};
