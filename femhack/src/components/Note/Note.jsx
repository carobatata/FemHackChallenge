import { removeNote } from "../../actions";
import { useDispatch } from 'react-redux';

export default function Note({title, description, id}) {

    const dispatch = useDispatch();

    function handleRemoveNote() {
        dispatch(removeNote(id))
    }  


    return (
    <div>
        <button onClick={handleRemoveNote}>X</button>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    )
};

