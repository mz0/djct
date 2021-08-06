function getWord(evt) {
    evt.preventDefault();
    let iWord = document.getElementById('word');
    const log = document.getElementById('result');
    log.textContent = `word submitted: ${iWord.value}`;
    
}

window.onload = function() {
    const form = document.getElementById('dict');
    form.addEventListener('submit', getWord);
}

let openRequest = indexedDB.open("words", 1);
openRequest.onupgradeneeded = function(evt) {
    // if the client had no DB, do init
    let db = openRequest.result;
    // switch(evt.oldVersion) { // existing db version
    //   case 0:
    //     // version 0 means that the client had no database
    if (!db.objectStoreNames.contains('words')) {
        db.createObjectStore('words', {keyPath: 'wrd'});
        console.log("'words' created", openRequest.result);
    } else {
        console.log("Surprise! 'words' found!", openRequest.result);
    }
        // let transaction = db.transaction("words", "readwrite");
        // let words = transaction.objectStore("words");
        // let w1 = { wrd: 'a', article: 'a - an indefinite article'}
        // let w2 = { wrd: 'aa', article: '"aa" is unknown'}
        // let request = words.add(w1);
        // request.onsuccess = function() { // (4)
        //     console.log("word added to the store", request.result);
        // };
        // request.onerror = function() {
        //     console.log("Error", request.error);
        // };
        // request = words.add(w2);
    // }
};

openRequest.onerror = function() {
    console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
    let db = openRequest.result;
    // continue working with database using db object
};
