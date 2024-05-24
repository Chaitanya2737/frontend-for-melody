import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import Wrapper from './Components/Wrapper/Wrapper';
import "./App.css"
import Search from './Components/Search/Search';
function App() {
  return (

    <div className='container'>
    <Section content={"The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness."}/>

    <Wrapper />
    <Search />
    </div>
  );
}

export default App;
