// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
var textToSpeak = '';
// Query selectors for buttons
var subjectBtn = document.getElementById('subject-btn');
var verbBtn = document.getElementById('verb-btn');
var adjectiveBtn = document.getElementById('adjective-btn');
var objectBtn = document.getElementById('object-btn');
var placeBtn = document.getElementById('place-btn');
var generateBtn = document.getElementById('generate-btn');
var resetBtn = document.getElementById('reset-btn');
var speakBtn = document.getElementById('speak-btn');

// Query selectors for displaying the results
var subjectResult = document.getElementById('subject-result');
var verbResult = document.getElementById('verb-result');
var adjectiveResult = document.getElementById('adjective-result');
var objectResult = document.getElementById('object-result');
var placeResult = document.getElementById('place-result');

// Query selector for story output
var storyOutput = document.getElementById('story-output');

// Arrays of words
var subjects = ['The cat', 'A dog', 'My friend', 'An elephant', 'The bird'];
var verbs = ['jumps', 'runs', 'flies', 'swims', 'sits'];
var adjectives = ['quickly', 'slowly', 'happily', 'sadly', 'angrily'];
var objects = ['a ball', 'the tree', 'the fence', 'a house', 'the car'];
var places = ['in the park', 'at the beach', 'in the forest', 'on the road', 'in the backyard'];

/* Functions
-------------------------------------------------- */
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateTextToSpeak() {
    textToSpeak = `${subjectResult.textContent} ${verbResult.textContent} ${adjectiveResult.textContent} ${objectResult.textContent} ${placeResult.textContent}`;
    storyOutput.textContent = textToSpeak;
}

function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function resetStory() {
    subjectResult.textContent = '[Subject]';
    verbResult.textContent = '[Verb]';
    adjectiveResult.textContent = '[Adjective]';
    objectResult.textContent = '[Object]';
    placeResult.textContent = '[Place]';
    storyOutput.textContent = 'Your story will appear here...';
    textToSpeak = '';
}

/* Event Listeners
-------------------------------------------------- */
// Handle clicks for each word category button
subjectBtn.onclick = function() {
    subjectResult.textContent = getRandomWord(subjects);
    updateTextToSpeak();
};

verbBtn.onclick = function() {
    verbResult.textContent = getRandomWord(verbs);
    updateTextToSpeak();
};

adjectiveBtn.onclick = function() {
    adjectiveResult.textContent = getRandomWord(adjectives);
    updateTextToSpeak();
};

objectBtn.onclick = function() {
    objectResult.textContent = getRandomWord(objects);
    updateTextToSpeak();
};

placeBtn.onclick = function() {
    placeResult.textContent = getRandomWord(places);
    updateTextToSpeak();
};

// Handle click for the generate story button
generateBtn.onclick = function() {
    subjectResult.textContent = getRandomWord(subjects);
    verbResult.textContent = getRandomWord(verbs);
    adjectiveResult.textContent = getRandomWord(adjectives);
    objectResult.textContent = getRandomWord(objects);
    placeResult.textContent = getRandomWord(places);
    updateTextToSpeak();
    speakNow(textToSpeak);
};

// Handle click for the reset button
resetBtn.onclick = function() {
    resetStory();
};

// Handle click for the speak button
speakBtn.onclick = function() {
    if (textToSpeak) {
        speakNow(textToSpeak);
    }
};
