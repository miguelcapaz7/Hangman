let can_play = true;
let words = new Array(
    ["PROGRAMMING", "the process of writing instructions for a computer"], ["CODING", "another name for programming"],
    ["TATTOO", "a form of body modification where a design is made by inserting ink"], ["TECHNOLOGY", "Computer Information..."],
    ["DATABASE", "a structured set of data held in a computer"], ["HANGMAN", "the game you are playing"], 
    ["ELECTRICITY", "the set of physical phenomena associated with the presence and motion of electric charge"],
    ["GUCCI", "a luxury brand of fashion house based in Florence, Italy"], ["COFFEE", "A drink in the morning"], 
    ["PYTHON", "a programming language named after a snake"], ["BESTBUY", "Future Shop is now..."], 
    ["SUBWAY", "sandwiches; also an underground railroad"], ["COMMITTEE", "A group of people appointed for a specific function"],
    ["XBOX", "a gaming console created by Microsoft"]
    ); //array of words

let to_guess = "";
let display_word = "";
let used_letters = "";
let wrong_guesses = 0;
let count = 0;


function getLetters(letter) { //taking a letter from user
    if (can_play == false) {
        return;
    }
    if (used_letters.indexOf(letter) != -1) {
        return;
    }
    used_letters += letter;
    document.game.usedLetters.value = used_letters;
    if (to_guess.indexOf(letter) != -1) { // correct letter guess
        guessCorrect(letter);
        display_word = temp_mask;
        document.game.displayWord.value = display_word;
        if (display_word.indexOf("#") == -1) { // won
            location.replace("victory_page/victorypage.html")//word is guessed
            can_play = false;
        }
    }
    else {
        // incorrect letter guess
        guessIncorrect();
    }
}

function guessCorrect(letter) {     //adds a point to score when guess is correct
    pos = 0;
    temp_mask = display_word;
    while (to_guess.indexOf(letter, pos) != -1) {
        pos = to_guess.indexOf(letter, pos);
        end = pos + 1;
        start_text = temp_mask.substring(0, pos);
        end_text = temp_mask.substring(end, temp_mask.length);
        temp_mask = start_text + letter + end_text;
        pos = end;
        count += 1;
        document.getElementById("score").innerHTML = "Score: " + count;
    }
}

function guessIncorrect() {     //minus a point for each guess that is incorrect
    wrong_guesses += 1; 
    count -= 1
    document.getElementById("score").innerHTML = "Score: " + count;
    eval("document.hm.src=\"hm" + wrong_guesses + ".gif\"");
    if (wrong_guesses == 10) {      //guesses condition
        // lost
        location.href = "fail_page/failpage.html";     //number of guesses are completed
        can_play = false;
    }
}

function btn_onclick() {     //reset of the game
    setRandomWord();
    document.game.usedLetters.value = "";
    used_letters = "";
    wrong_guesses = 0;
    document.hm.src = "hang1.gif";
    count =  0;
    document.getElementById("score").innerHTML = "Score: " + count;
}

function setRandomWord() {       //producing random words from the array
    can_play = true;
    random_number = Math.round(Math.random() * (words.length - 1));
    to_guess = words[random_number][0];
    //document.game.theWord.value = to_guess;
    // display masked word
    masked_word = wordBlender(to_guess);
    document.game.displayWord.value = masked_word;
    display_word = masked_word;
    displayHint(random_number);
}

function displayHint(random_number) {       //displays the hint for word being guessed
    document.getElementById("hint").innerHTML = "Hint: " + words[random_number][1]
    document.getElementById("hint").style.color = "white";
}

function wordBlender(m) {    //displaying # on the place of letters in the guess word
    mask = "";
    word_length = m.length;
    for (i = 0; i < word_length; i++) {
        mask += "#";    //setting # as a mask letter
    }
    return mask;
}




