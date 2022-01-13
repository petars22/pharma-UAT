export default function showCountries(e, showAll) {
    let countries, toggles;

    if(showAll) {
        countries = e.target = document.getElementById("timeline").querySelectorAll(".countries");
        toggles = document.getElementById("timeline").querySelectorAll(".countries-toggle");
    }
    else {
        countries = e.target.parentElement.querySelectorAll(".countries");
        toggles = [e.target];
    }

    for(let i = 0; i < countries.length; i++) {
        if(!showAll || showAll === 1) {
            countries[i].classList.remove("hide");
            toggles[i].classList.add("hide");
        }
        else {
            countries[i].classList.add("hide");
            toggles[i].classList.remove("hide");
        }
    }
}