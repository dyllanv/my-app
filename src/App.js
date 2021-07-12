import NavBar from "./components/navbar";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Volunteer from "./components/volunteer";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Banner from "./components/banner";
import SocialIcons from "./components/social_icons";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from "react-router-dom";
/* <div class="top">
      <Banner></Banner>
      <PacBoard></PacBoard>
    </div>
*/
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        
        <Banner></Banner>
        
        <About></About>
        <Education></Education>
        <Experience></Experience>
        <Volunteer></Volunteer>
        <Skills></Skills>
        <Projects></Projects>
        <SocialIcons></SocialIcons>
      </Router>
    </div>
  );
}

export default App;
