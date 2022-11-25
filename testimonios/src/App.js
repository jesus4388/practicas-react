import logo from './logo.svg';
import './App.css';
import  Testimonio from './componentes/Testimonios'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Nuestros Guerreros de DragonBall</h1>
        <Testimonio
        imagen='goku.png'
        nombre='Goku'
        planeta='La Tierra'
        nivel='Guerrero de clase baja'
        texto='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos.' />
        <Testimonio
        imagen='bill.jpeg'
        nombre='Bill'
        planeta='Algun Lugar'
        nivel='Dios de la Destruccion'
        texto='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos.' />
        <Testimonio
        imagen='kurilin.png'
        nombre='Kurilin'
        planeta='La Tierra'
        nivel='Guerrero de clase baja'
        texto='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos.' />
      </div>
    </div>
  );
}

export default App;
