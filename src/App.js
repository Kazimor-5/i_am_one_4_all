// ! COMPONENTS
import Participation from './components/Participation';
import Challenge from './components/Challenge';
import Etapes from './components/Etapes';
// ! FILES
import './App.css';

const App = () => {
  return (
    <main className='container'>
      <Participation />
      <Challenge />
      <Etapes />
    </main>
  );
};

export default App;
