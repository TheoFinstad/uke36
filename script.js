function navneformattering() {
    let fornavn = prompt("Skriv ditt fornavn")
    let etternavn = prompt("Skriv ditt etternavn")
    fornavn = fornavn.substring(0,1).toUpperCase() +
    fornavn.substring(1).toLowerCase();
    
    etternavn = etternavn.substring(0,1).toUpperCase() +
    etternavn.substring(1).toLowerCase();
    return (`${fornavn} ${etternavn}`)
}

document.write(navneformattering());