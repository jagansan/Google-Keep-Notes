import React, { useState } from "react";
import CreateNote from './CreateNote';
import NoteList from "./NoteList";

function GoogleChat() {
    // Declare state variable for notes
    const [notes, setNotes] = useState([]);
  
    // Add new note to the list
    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }
  
    // Delete note function
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
  
    return (
        <div>
            <CreateNote onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <NoteList key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
                );
            })}
      </div>
    );
}
  
export default GoogleChat;