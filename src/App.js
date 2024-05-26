import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import Wrapper from './Components/Wrapper/Wrapper';
import "./App.css"
import Search from './Components/Search/Search';
import Swapper from './Components/Swapper/Swapper';
import Fotter from './Components/footer/Fotter';
import Specialisation from './Components/SpecialisationSection/Specialisation';
import Specialist from './Components/SpecialistSection/Specialist';
import Caring from './Components/CaringSection/caring';
import Blog from './Components/Blog & News section/Blog';
import Family from './Components/Family section/Family';
import QuestionAndAnswer from './Components/Question & answer section/QuestionAnd Answer';
function App() {
  return (

    <div className='container'>
    <Section content={"The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness."}/>

    <Wrapper />
    <Search />
    <Swapper />
    <Specialisation />
    <Specialist />
    <Caring />
    <Blog />
    <Family />
    <QuestionAndAnswer/>
    <Fotter />
    </div>
  );
}

export default App;
