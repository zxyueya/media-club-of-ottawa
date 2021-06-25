document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector("#my-menu"),
            "(max-width: 600px)"
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector("a[href= '#my-menu']")
            .addEventListener("click", (evnt) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);


drawer.close();
