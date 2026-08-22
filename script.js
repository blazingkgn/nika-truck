/* =========================================
        ЗАГРУЗОЧНЫЙ ЭКРАН
========================================= */

setTimeout(function () {

    const loader = document.querySelector(".loader");

    if (!loader) {
        return;
    }

    loader.classList.add("hide");

    loader.style.opacity = "0";

    setTimeout(function () {

        loader.style.display = "none";

    }, 1200);

}, 3000);


/* =========================================
        МУЗЫКА
========================================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

if (music && musicBtn) {

    musicBtn.addEventListener("click", function () {

        if (isPlaying) {

            music.pause();

            musicBtn.innerHTML = "♫";

            isPlaying = false;

        } else {

            music.play()
                .then(function () {

                    musicBtn.innerHTML = "❚❚";

                    isPlaying = true;

                })
                .catch(function (error) {

                    console.log(error);

                });

        }

    });

}


/* =========================================
        ОТЗЫВЫ
========================================= */

const reviewBtn = document.getElementById("reviewBtn");
const authModal = document.getElementById("authModal");
const closeModal = document.getElementById("closeModal");
const loginBtn = document.getElementById("loginBtn");


if (reviewBtn && authModal) {

    reviewBtn.addEventListener("click", function () {

        authModal.style.display = "flex";

    });

}


if (closeModal && authModal) {

    closeModal.addEventListener("click", function () {

        authModal.style.display = "none";

    });

}


if (loginBtn && authModal) {

    loginBtn.addEventListener("click", function () {

        alert(
            "Для продолжения необходимо авторизоваться."
        );

        authModal.style.display = "none";

    });

}


window.addEventListener("click", function (event) {

    if (
        authModal &&
        event.target === authModal
    ) {

        authModal.style.display = "none";

    }

});
