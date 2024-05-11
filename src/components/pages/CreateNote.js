import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function CreateNote(props) {
    // Declare state variable for expanding input component
    const [isExpanded, setExpanded] = useState(false);
  
    // Declare state variable for note entered by user
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
  
    // Update note to user input 
    function handleChange(event) {
        const { name, value } = event.target;
  
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value               
            };
        });
    }
  
    // Submit note entered by user
    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
  
    // Expand note card
    function expand() {
        setExpanded(true);
    }
  
    return (
        <div className='google_keep_notes'> 
            <form className="create-note" autoComplete="off">
                {isExpanded && (
                    <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                )}  
                <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
                <div className='add___note___icon' in={isExpanded}>
                    <div className='icon___style' onClick={submitNote}><FaPlus /></div>
                </div>
            </form>
        </div>
    );
}

export default CreateNote;