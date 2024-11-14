import logo from './logo.svg';
import './App.css';
import Herosection from './components/Herosection';
import Imageslider from './components/Imageslider';
import Explore from './components/Explore';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <Imageslider/>
      <Explore/>
      <ContactUs/>
    </>
  );
}

export default App;
