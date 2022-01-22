import { useState } from 'react';
import {  useDispatch } from 'react-redux';
import s from './AddTag.module.css';

export default function AddTag() {
    const [tags, setTags] = useState([]);
    
    const addTags = event => {
        if(event.key === 'Enter') {
            setTags([...tags, event.target.value])
        };
    } 
    
    return(
        <div>
            <div className={s.list}>
                {tags?.map((tag, index) => (
                    <div key={index} className={s.tagContainer}>
                        <span className={s.tag}>{tag}</span>
                    </div>
                ))}
            </div>
            <input
                className={s.input}
                type='text'
                placeholder='Press enter to add tags'
                onKeyUp={addTags}
                />
        </div>
    );
  };
  