import "./App.css";
import AboutMe from "./pages/AboutMe";
import ExperienceAndEducation from "./pages/ExperienceAndEducation";
import Home from "./pages/Home";
import ProfessionalSkillSet from "./components/ProfessionalSkillSet";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Contacts />
      </header> */}

      <main>
        {/* <ProfessionalSkillSet /> */}
        <Home id="home" />
        <AboutMe id="about" />
        <ExperienceAndEducation id="experienceAndEducation" />

      </main>
    </div>
  );
}

export default App;
