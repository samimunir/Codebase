import './App.css';
import Heading from './components/heading/Heading';
import Navbar from './components/navbar/Navbar';
import HeroImg from './components/hero-img/Hero-img';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Navbar/>
      <HeroImg/>
    </div>
  );
}

export default App;