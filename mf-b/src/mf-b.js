async function init() {
    console.log("INIT B");
    const $ = (await import("jquery")).default;
    $(document).ready(() => {
        console.log("READY B");
        const el = document.querySelector(".mf-b");
        $(el)[0].innerHTML = "hello from B";
    });
}

init();
