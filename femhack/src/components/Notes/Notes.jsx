import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Note from '../Note/Note';
import s from './Notes.module.css';

export default function Notes() {

    let notes = useSelector((state) => state); 

    return (
      <div className={s.bigContainer}>
        <div className={s.container}>
            {notes?.map((note) => (
              //   <Link key={note.id} to={`/edit/${note.id}`}>
              <div key={note.id}>
                  <Note 
                  id={note.id}
                  title={note.title}
                  description={note.description}
                  />
              </div>
              //   </Link>
            ))}
        </div>
      </div>
      )
  };