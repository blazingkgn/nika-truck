document.addEventListener("DOMContentLoaded", function () {

    const loader = document.querySelector(".loader");

    setTimeout(function () {
        if (loader) {
            loader.classList.add("hide");
        }
    }, 3000);


    // Кнопка отзывов
    const reviewBtn = document.getElementById("reviewBtn");
    const authModal = document.getElementById("authModal");
    const closeModal = document.getElementById("closeModal");

    if (reviewBtn && authModal) {
        reviewBtn.addEventListener("click", function () {
            authModal.classList.add("show");
        });
    }

    if (closeModal && authModal) {
        closeModal.addEventListener("click", function () {
            authModal.classList.remove("show");
        });
    }


    // Музыка
    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (music && musicBtn) {
        musicBtn.addEventListener("click", function () {
            if (music.paused) {
                music.play();
                musicBtn.textContent = "❚❚";
            } else {
                music.pause();
                musicBtn.textContent = "♫";
            }
        });
    }

});
