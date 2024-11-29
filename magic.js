(() => {
    document
        .querySelector("#socialsButton")
        .addEventListener("click", (event) => {
            document.querySelector("#socialsDialog").showModal();
        });

    document
        .querySelector("#blogsButton")
        .addEventListener("click", (event) => {
            document.querySelector("#blogsDialog").showModal();
        });

    document.querySelector("#callButton").addEventListener("click", (event) => {
        window.open("tel:+79292169675", "_blank");
    });

    document
        .querySelector("#blogsButton")
        .addEventListener("click", (event) => {});

    document.querySelector("#mapsButton").addEventListener("click", (event) => {
        window.open("https://yandex.ru/profile/214879676656", "_blank");
    });

    const descButtons = document.querySelectorAll(
        ".services__descriptionButton"
    );

    descButtons.forEach((element) =>
        element.addEventListener("click", (event) => {
            const descriptionId = event.target.dataset.descriptionElement;

            Array.from(
                document.querySelectorAll(
                    ".services__descriptionContent._active"
                )
            )
                .concat(
                    Array.from(
                        document.querySelectorAll(
                            ".services__descriptionButton._active"
                        )
                    )
                )
                .forEach((element) => {
                    if (
                        element.id == descriptionId ||
                        element.dataset.descriptionElement == descriptionId
                    )
                        return null;

                    element.classList.remove("_active");
                });

            const descriptionElement = document.querySelector(
                "#" + descriptionId
            );

            if (!event.target.classList.contains("_active")) {
                event.target.classList.add("_active");
                descriptionElement.classList.add("_active");
            } else {
                event.target.classList.remove("_active");
                descriptionElement.classList.remove("_active");
            }
        })
    );
})();
