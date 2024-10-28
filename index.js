"use strict";

const HEX_LEVELS = "0123456789ABCDEF";

const getRandomHEXColor = () => {
    // Возвращает рандомно сгенерированный HEX код, размеров в 6 символов
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * HEX_LEVELS.length);
        color += HEX_LEVELS[randomIndex];
    }

    return color;
};

document.addEventListener("DOMContentLoaded", () => {
    const generation = document.querySelector(".generation");
    const generationColorElment = generation.querySelector(".generation-color");
    const generationCodeElement = generation.querySelector("#color-code");
    const generateColorButton = generation.querySelector(".generate-color_btn");
    const copyHEXButton = generation.querySelector(".copy-hex_btn");
    const copiedPush = copyHEXButton.querySelector(".copied_push");

    generateColorButton.addEventListener("click", () => {
        // Установка фона с рандомным цветом для блока .generation-color
        const randomColor = getRandomHEXColor();

        generationColorElment.style.backgroundColor = randomColor;
        generationCodeElement.textContent = randomColor;
    });

    copyHEXButton.addEventListener("click", () => {
        const hexCode = generationCodeElement.textContent;

        navigator.clipboard
            .writeText(hexCode)
            .then(() => {
                copiedPush.style.visibility = "visible";

                setTimeout(() => {
                    copiedPush.style.visibility = "hidden";
                }, 1000);
            })
            .catch((err) => {
                alert("Возникла ошибка при копировании HEX кода.");
                console.error(err);
            });
    });
});
