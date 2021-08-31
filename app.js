var textInput = document.querySelector("#text-input")
var btnTranslate = document.querySelector("#btn-translate")
var outputDiv = document.querySelector("#output-text")
const url = "https://api.funtranslations.com/translate/minion.json"

function constructTranslationUrl(text) {
    return url + "?text=" + text
}

function showTranslatedText(json) {

    if (json.success) {
        const translatedText = json.contents.translated
        outputDiv.innerText = translatedText
    } else {
        outputDiv.style.color = "red"
        outputDiv.innerText = json.error.message
    }

}

function showErrorMessage(error) {
    outputDiv.style.color = "red"
    outputDiv.innerText = error.message


}
function handleTranslate() {
    fetch(constructTranslationUrl(textInput.value))
        .then(response => response.json())
        .then(json => showTranslatedText(json))
        .catch(error => showErrorMessage(error))

}


btnTranslate.addEventListener("click", handleTranslate)