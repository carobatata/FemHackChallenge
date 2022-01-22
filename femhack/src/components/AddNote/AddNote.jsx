import { useEffect, useState } from 'react';
import { addNote } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';

export default function AddNote() {

    const dispatch = useDispatch();

    const [input,setInput] = useState({
      title: "",
      description: "",
    });
  
    const handleChange = function(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    }
  
    const handleSubmit = function(e){
      e.preventDefault();
      console.log(input)
      dispatch(addNote(input));
      alert('Note succesfully created')
    }
  
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
  
          <label>Title</label>
          <input 
            name="title"
            type="text"
            value= {input.title}
            onChange={handleChange}/>
  
          <label>Description</label>
          <textarea 
              name="description" 
              value = {input.description} 
              onChange={handleChange}></textarea>
  
          <button type= "submit">Add Note</button>
  
        </form>
      </div>
    )
  };
  
//   export default connect(null, {addTodo})(AddTodo)