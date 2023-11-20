//using JS to send the note to the <ul>

function getRandomColor(){
    let colors = ['#a2d1fc', '#ffc2cd','#97aedc', '#d967ae', '#b7cf8e', '#d5edc2'];
    let chosenColor = colors[Math.floor(Math.random() * colors.length)];
    return chosenColor;
}

/*
    1. Take the note from the input box
    2. Clear the note from input box
    3. Add the note to the list 
*/
function sendNotes(){
    let input = document.getElementById("input");
    let noteContent = input.value; //using .value instead of .innerHTML in the case of text boxes
    input.value = "";

    let newNote = document.createElement('li');
    newNote.style = "height: 150px";
    newNote.style.backgroundColor = getRandomColor();
    newNote.classList.add('container');
    //newNote.classList.add('inner-container');
    newNote.innerHTML = noteContent;
    let allNotes = document.getElementById('notes');
    allNotes.appendChild(newNote);
}

let button = document.getElementById("send-note-btn");
button.addEventListener('click', sendNotes);

