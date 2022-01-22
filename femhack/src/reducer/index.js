import { addNote, removeNote, editNote } from "../actions";

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "AddNote":
          return [...state, action.payload]
      case "RemoveNote":
          return state.filter(n => n.id !== action.payload)
      default:
          return state;
    }  
  };
  
 