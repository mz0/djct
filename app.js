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
