import "./App.css";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ProfessionalSkillSet from "./components/ProfessionalSkillSet";
import Profile from "./components/Profile";
import { ReactComponent as Facebook } from './images/facebook-f.svg';
import { ReactComponent as Instagram } from './images/instagram.svg';
import { ReactComponent as Linkedin } from './images/linkedin-in.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contacts />
      </header>

      <main>
        <Profile />

        <Experience />

        <Education />

        <ProfessionalSkillSet />

      </main>

      <footer>
        <div>© 2024 by Jeveen Shrestha | jeveen2012shrestha</div>
        <ul>
          <li><a href="#"><Facebook /></a></li>
          <li><a href=""><Instagram /></a></li>
          <li><a href=""><Linkedin /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
