import { addNote, removeNote, editNote, addTag} from "../actions";

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "AddNote":
            return [...state, action.payload]
        case "RemoveNote":
            return state.filter(n => n.id !== action.payload)
        case "EditNote":
            var noteToEdit = state.find(n => n.id === action.payload.id)
            noteToEdit.title = action.payload.title;
            noteToEdit.description = action.payload.description;
            return state;
        // case "AddTag":
        //     var note = state.find(n => n.id === action.payload.noteId)
        //     note.tags = [...note.tags, action.payload.tag];
        //     return state;
        default:
            return state;
    }  
  };
