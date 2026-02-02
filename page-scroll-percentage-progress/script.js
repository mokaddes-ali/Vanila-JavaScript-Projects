let scrollPercentage = () => {
    let progress = document.getElementById("progress");
    let value = document.getElementById("progress-value");
    let progressTop = document.getElementById("progress-top");

    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let percent = Math.round((scrollTop / scrollHeight) * 100);
    
    progressTop.style.width = percent + "%";

    progress.style.background = `
        conic-gradient(
            #008fff ${percent}%,
            #c0c0ff ${percent}%
        )
    `;

    value.innerText = percent + "%";
}
// window.onscroll = scrollPercentage;
// window.onload = scrollPercentage;

//!OR
 window.addEventListener("scroll", () => {
    scrollPercentage();
 });

