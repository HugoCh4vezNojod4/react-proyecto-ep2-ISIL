//import logo from './logo.svg';
import './App.css';
import AboutUs from './home/AboutUs';
import Blog from './home/Blog';
import Galeria from './home/Galeria';
import Noticias from './home/Noticias';
import Slider from './home/Slider';

function App() {
  return (
    <div className="App">
      <Slider/>
      <AboutUs/>
      <Noticias/>
      <Galeria/>
      <Blog/>
    </div>
  );
}

export default App;
