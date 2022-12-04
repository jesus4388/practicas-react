import './App.css';
import freeCodeCampLogo from './imagenes/logo-freecodecamp.jpeg';
function App() {
  return (
    <div className='App'>
     <div className='logo-contenedor'>
      <img 
        src={freeCodeCampLogo}
        className='logo'
        alt='freecodecamp-logo' />
     </div>
    </div>
  );
}

export default App;
