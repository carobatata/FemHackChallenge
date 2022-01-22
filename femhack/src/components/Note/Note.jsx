import { removeNote, editNote } from "../../actions";
import { useDispatch } from 'react-redux';
import s from './Note.module.css';
import edit from '../../edit.png'
import { useState } from "react";
import AddTag from "../AddTag/AddTag";

export default function Note({title, description, id}) {

    const dispatch = useDispatch();

    function handleRemoveNote() {
        dispatch(removeNote(id))
    }  

    const [input,setInput] = useState({
        id,
        title,
        description,
      });

      const [pressed, setPressed] = useState(false);
      const [pressing, setPressing] = useState(false);
    
      const handleChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }
    
      const handleSubmit = function(e){
        e.preventDefault();
        console.log(input)
        dispatch(editNote(input));
        setPressed(false);
      }

      const handleClick = function() {
        setPressed(true);
      }

      const handleAddTag = function() {
        setPressing(true)
      }

    if(!pressed){
        return (
        <div className={s.container}>
            <div className={s.button}>
                <button className={s.buttonText} onClick={handleAddTag}>Add Tags</button>
                <button className={s.buttonText} onClick={handleClick}><img className={s.edit} src={edit} alt="editPencil"/></button>
                <button className={s.buttonText} onClick={handleRemoveNote}>x</button>
            </div>
            <div className={s.subContainer}>
                <p className={s.title}>{input.title}</p>
            </div>
            <div className={s.subContainer}>
                <p className={s.description}>{input.description}</p>
            </div>
            {pressing ? (<AddTag/>) : (null)}
        </div>
        )
    } else {
        return (
            <div className={s.container}>
              <form className={s.container} onSubmit={handleSubmit}> 
                  <label className={s.label}>New title:</label>
                  <input
                      className={s.input} 
                      name="title"
                      type="text"
                      value= {input.title}
                      onChange={handleChange}/>
      
                  <label className={s.label}>New description:</label>
                  <textarea 
                      className={s.input}
                      name="description" 
                      value = {input.description} 
                  //   placeholder='enter a valid description'
                      onChange={handleChange}></textarea>
      
                  <button className={s.buttons} type= "submit">Submit</button>
              </form>
            </div>
          )
    }
};

