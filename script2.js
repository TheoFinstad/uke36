function countWords(sentence) {   
    const words = sentence.trim().split(/\s+/);

    return words.length;
}

const sentence = "2ITA er best";
const wordCount = countWords(sentence);

console.log(`Antall ord i setningen er: ${wordCount}`);
