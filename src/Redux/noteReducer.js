const initState = {
    notesState: [
        
    ]}

const noteReducer = (state = initState,action) => {
     if(action.type === 'DELETE_NOTE') {
    }
    
    else if(action.type === 'ADD_NOTE') {
        let updatedNotes = [...state.notes,action.note]
        return {
            ...state,
            notes: updatedNotes
        }
    }

    else if(action.type === 'ERROR_ADDING_NOTE')
    {
       
    }
    return state;
}
export default noteReducer;