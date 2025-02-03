document.addEventListener('DOMContentLoaded', () => {
    const word = 'flower';
    //const scrambledWord = shuffleWord(word);
    const scrambledWordDiv = document.querySelector('.scrambled-word');
    const answerBoxesDiv = document.querySelector('.answer-boxes');
    const mistakesDiv = document.getElementById('incorrect');
    const triesSpan = document.querySelector('.tries');
    // let mistakes = [];
    let tries = 0;


    // BELOW: SIMPLY FOR CHALLENGE COMPARISON
    const scrambledWord = 'relowf';
    let mistakes = ['a', 'e', 'w', 't'];
    mistakesDiv.textContent = mistakes.join(', ');
    triesSpan.textContent = '(4/5):';
    //

    scrambledWordDiv.textContent = scrambledWord;
    createAnswerBoxes(word.length);

    // document.addEventListener('keydown', handleKeyPress);

    function shuffleWord(word) {
        return word.split('').sort(() => Math.random() - 0.5).join('');
    }

    function createAnswerBoxes(length) {
        for (let i = 0; i < length; i++) {
            // const box = document.createElement('input');
            const box = document.createElement('div');
            box.classList.add('answer-box');
            box.setAttribute('id', `ab${i+1}`)
            box.setAttribute('type', 'text');
            box.setAttribute('maxlength', '1');
            answerBoxesDiv.appendChild(box);
        }
    }

    // function handleKeyPress(event) {
    //     const letter = event.key.toLowerCase();
    //     if (letter.match(/[a-z]/) && letter.length === 1) {
    //         tries++; // TODO: Fix increase, should only go to 5
    //         triesSpan.textContent = `(${tries}/5):`;
    //         if (word.includes(letter)) {
    //             revealLetter(letter);
    //         } else {
    //             mistakes.push(letter);
    //             mistakesDiv.textContent = mistakes.join(', ');
    //         }
    //     }
    // }

    // function revealLetter(letter) {
    //     const boxes = document.querySelectorAll('.answer-box');
    //     word.split('').forEach((char, index) => {
    //         if (char === letter) {
    //             boxes[index].textContent = letter;
    //         }
    //     });
    // }
});