let myParagraph = document.querySelector("#myParagraph");
let contentForParagraph = document.querySelector("#contentForParagraph");

let myButton = document.querySelector("#myButton");
myButton.addEventListener("click", () => {
    if(contentForParagraph.value === "Pão com ovo") {
        myParagraph.innerHTML = "🌅🌅 Bom Dia, tenha um bom café da manhã!! 🌅🌅"
    } else if (contentForParagraph.value === "feijão com arroz" ) {
        myParagraph.innerHTML = "🌄🌄 Boa Tarde, tenha um bom almoço!!! 🌄🌄"
    } else {
        myParagraph.innerHTML = "🌙🌙 Boa Noite, tenha um bom jantar!!! 🌙🌙"
    }
})