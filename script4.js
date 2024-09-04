function findLongestWord(sentence) {
  
    const words = sentence.split(/\s+/);


    let longestWord = '';


    words.forEach(function(word) {
       
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord.length;
}


function main() {
    let userInput = prompt("Skriv inn en setning:");

    let longestWordLength = findLongestWord(userInput);

    console.log(`Antall bokstaver i det lengste ordet er: ${longestWordLength}`);
}

main();
