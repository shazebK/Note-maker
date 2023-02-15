document.getElementById("btn").addEventListener("click",addNote);
showNotes();

function addNote(){
    var notesJSON = localStorage.getItem("notes");
    var notes = JSON.parse(notesJSON);
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;

    if(notes == null){
        notes = [];
    }

    notes.push({
        title:title,
        description:description,
    });

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    localStorage.setItem("notes",JSON.stringify(notes));
    showNotes();

    
}

function showNotes(){
    var notesJSON = localStorage.getItem("notes");
    var notes = JSON.parse(notesJSON);
    var notesHtml = "";
    if(notes == null){
        notesHtml+="Nothing to show";
    }
    else{
    notes.forEach(function(note,index){
        notesHtml+=`<div class = "noteCard">
        <h2>${note.title}</h2>
        <p>${note.description}</p>
    </div>`
    });
}
    document.getElementById("notes").innerHTML = notesHtml;
}