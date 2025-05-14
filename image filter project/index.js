const tabs = document.querySelector(".tabs");
const gallery = document.querySelectorAll(".images");

tabs.addEventListener("click", (event) => {
    if (event.target.dataset.category !== undefined) {
        filterSearch(event.target.dataset.category);
    }
});

const filterSearch = (value) => {
    gallery.forEach((curElem) => {
        if (curElem.dataset.category === value || value === "all") {
            curElem.style.display = "block";
        } else {
            curElem.style.display = "none";
        }
    });
};