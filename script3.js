
function countWords(sentence) {
    
    const words = sentence.trim().split(/\s+/);
    return words.length;
}

function replaceAWithAt(sentence) {
    return sentence.replace(/a/g, '@');
}


function main() {
    let userInput = prompt("Skriv inn en setning:");

    let wordCount = countWords(userInput);
    console.log(`Antall ord i setningen er: ${wordCount}`);

    let modifiedSentence = replaceAWithAt(userInput);
    console.log("Modifisert setning: " + modifiedSentence);
}


main();
