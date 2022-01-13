export default function handleAccordionClick(e) {
    let toggle = e.target;
    if(!toggle.classList.contains("accordion-toggle")) toggle = toggle.closest(".accordion-toggle");

    let arrow = toggle.querySelector(".arrow")
    if(arrow) arrow.classList.toggle("rotate");
    
    toggle.nextSibling.classList.toggle("hide");
}
