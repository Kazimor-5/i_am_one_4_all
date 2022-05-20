// ! COMPONENTS
import Header from './components/Header';
import Participation from './components/Participation';
import Challenge from './components/Challenge';
import Etapes from './components/Etapes';
// ! FILES
import './App.css';
import Slider from './components/Slider';

const App = () => {
  return (
    <>
      <Header />
      <main className='container'>
        <Participation />
        <Challenge />
        <Etapes />
        <Slider />
      </main>
    </>
  );
};

export default App;
