function swapItems() { // Funzione che porta in cima l'ultimo elemento della tabella
    table_rows = document.getElementsByTagName("tr"); // table_rows è l'elenco dei tag <tr>
    table_rows[1].before(table_rows[table_rows.length - 1]); // Posiziona l'ultimo elemento di table_rows subito sopra il primo
}
// La variabile document si riferisce a tutto il DOM (Document Object Model)
button = document.getElementsByTagName("th")[0]; // button è il primo <th> della pagina, che corrisponde alla scritta "Social Media"
button.addEventListener("click", swapItems); // Aggiunge un listener (ascoltatore) per l'evento "click" relativo all'oggetto button
// In pratica chiama la funzione di callback che si chiama swapItems quando l'elemento button viene "click"ato