document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       LOADER
    ============================== */

    const loader = document.querySelector(".loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hide");
            loader.style.opacity = "0";

            setTimeout(function () {

                loader.style.display = "none";

            }, 1200);

        }, 3000);

    }


    /* ==============================
       MUSIC
    ============================== */

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (music && musicBtn) {

        let isPlaying = false;

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

                        console.log("Ошибка музыки:", error);

                    });

            }

        });

    }

});
