const scrollbtn = document.querySelector(".scroll");

scrollbtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

