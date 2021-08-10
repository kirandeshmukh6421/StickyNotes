var notes = 5;
function createNote(note){
    // Create a New Note
    var element = 
    `<div class="note">
        <div class="inner-div">
            <button class="close-btn" onclick="this.parentElement.parentElement.remove();" contenteditable="false">X</button>
            <div contenteditable="true" class="note-title">
            Note #`
            +note+
            `</div>
            <div class="note-content" data-text="Type here..." contenteditable="true"></div>
            </div>
        </div>
    </div>`;
    // Appends the New Note
    document.body.insertAdjacentHTML("beforeend", element);
}

// Loads 5 Notes when the page loads
function loadNotes(){
    for(var note=1; note<=notes; note++){
        createNote(note);
    }
}

function addNote(){
    notes++;
    createNote(notes);
}