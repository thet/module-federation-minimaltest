async function init() {
    console.log("INIT A");

    const $ = (await import("jquery")).default;

    $(document).ready(() => {
        console.log("READY A");
        const el = document.querySelector(".mf-a");
        $(el)[0].innerHTML = "hello from A";
    });
}

init();
