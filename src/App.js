import "./App.css"
import Home from "./sections/01_home/Home"
import Techs from "./sections/02_techs/Techs"
import Based from "./sections/03_based/Based";
import Values from "./sections/04_values/Values"
import Projects from "./sections/05_projects/Projects"
import FirstProject from "./sections/06_firstProject/FirstProject"
import SecondProject from "./sections/07_secondProject/SecondProject"
import ThirdProject from "./sections/08_thirdProject/ThirdProject"
import Contacts from "./sections/09_contacts/Contacts"


function App() {
  return (
    <div className="App">      
      <Home />
      <Techs />
      <Based />
      <Values />
      <Projects />
      <FirstProject />
      <SecondProject />
      <ThirdProject />
      <Contacts />
    </div>
  );
}

export default App;
