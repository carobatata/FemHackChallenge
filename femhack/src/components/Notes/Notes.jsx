import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Note from '../Note/Note';

export default function Notes() {

    let notes = useSelector((state) => state); 

    return (
      <div>
          {notes?.map((note) => (
              <Link key={note.id} to={`/edit/${note.id}`}>
                  <Note
                    id={note.id}
                    title={note.title}
                    description={note.description}/>
              </Link>
          ))}
      </div>
    )
  };