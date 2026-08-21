setTimeout(function(){

    const loader = document.querySelector(".loader");


    loader.classList.add("hide");


    loader.style.opacity="0";


    setTimeout(function(){

        loader.style.display="none";

    },1200);


},3000);

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", function () {

    if (isPlaying) {

        music.pause();
        musicBtn.innerHTML = "♫";

    } else {

       music.play().catch(error => console.log(error));
        musicBtn.innerHTML = "❚❚";

    }

    isPlaying = !isPlaying;

});


}

if (closeModal) {

    closeModal.addEventListener("click", function () {

        authModal.style.display = "none";

    });

}

if (loginBtn) {

    loginBtn.addEventListener("click", function () {

        alert("Для продолжения необходимо авторизоваться.");

        authModal.style.display = "none";

    });

}

window.addEventListener("click", function (e) {

    if (e.target === authModal) {

        authModal.style.display = "none";

    }

});
