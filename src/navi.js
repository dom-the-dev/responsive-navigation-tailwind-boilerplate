const navi = document.getElementById("navi");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

document.getElementById("burger").addEventListener("click", function() {
    // hide/show mobile nav
    navi.classList.toggle("-right-full")
    navi.classList.toggle("right-0")

    // burger to cross
    bar1.classList.toggle("rotate-45")
    bar2.classList.toggle("hidden")
    bar3.classList.toggle("-rotate-45")
})