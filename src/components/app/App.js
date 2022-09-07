import './App.css';
import Header from '../header/header';
import AboutMe from '../about-me/about-me';
import Slider from '../slider/slider';

function App() {
  return (
    <main className="main">
      <Header/>
      <AboutMe/>
      <Slider/>
    </main>
  );
}

export default App;
