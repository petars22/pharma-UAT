export default function highlightSearchStatement(search) {
    setTimeout(() => {
        if(document.getElementById("table-rows")) {
            const elements = document.getElementById("table-rows").querySelectorAll(".table-row .table-column.question span, .table-row .table-column.answer span");

            for(let i = 0; i < elements.length; i++) {
                elements[i].innerHTML = elements[i].dataset.content.replace(search, `<b class="highlighted">${search}</b>`)
            }
        }
    }, 1000);
}