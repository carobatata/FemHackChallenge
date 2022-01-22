import { addNote, removeNote, editNote} from "../actions";

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
            console.log(state); 
            return state;
        default:
            return state;
    }  
  };
