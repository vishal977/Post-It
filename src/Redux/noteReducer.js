
//Default state when store sets up initially
const initState = {
    notesState: [
        
    ]}

const noteReducer = (state = initState,action) => {
     //Delete Note Action
     if(action.type === 'DELETE_NOTE') {
        console.log("Note Deleted");
    }
    
    //Add Note Action
    else if(action.type === 'ADD_NOTE') {
        let updatedNotes = [...state.notes,action.note]
        return {
            ...state,
            notes: updatedNotes
        }
    }

    //Error Message
    else if(action.type === 'ERROR_ADDING_NOTE')
    {
        console.log("Error adding Note",action.err);
    }
    return state;
}
export default noteReducer;