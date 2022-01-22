import AddNote from "../AddNote/AddNote";
import Notes from "../Notes/Notes";
import google from '../../google.png';
import s from './Home.module.css';

function Home() {
  return (
    <div>
        <div className={s.nav}>
            <p className={s.title}>Note-Taking App</p>
        </div>
        <AddNote/>
        <Notes/>
    </div>
  );
}

export default Home;