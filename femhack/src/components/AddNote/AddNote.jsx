import { useState } from 'react';
import { addNote } from '../../actions/index';
import {  useDispatch } from 'react-redux';
import s from './AddNote.module.css';


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
      setInput({
          title: '',
          description: '',
      })
    }
  
  
    return (
      <div className={s.container}>
        <form className={s.container} onSubmit={handleSubmit}> 
            <label className={s.label}>Title:</label>
            <input
                className={s.input} 
                name="title"
                type="text"
                value= {input.title}
                onChange={handleChange}/>

            <label className={s.label}>Description:</label>
            <textarea 
                className={s.input}
                name="description" 
                value = {input.description} 
            //   placeholder='enter a valid description'
                onChange={handleChange}></textarea>

            <button className={s.button} type= "submit">Add Note</button>
        </form>
      </div>
    )
  };
  
