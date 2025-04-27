import PaginaPrincipal from "./pages/PaginaPrincipal";



function App() {

  const alumno1 = {
    nombre: 'Juan Manuel',
    apellido: 'Agostino Colombres',
    legajo: 61131,
    github: "https://github.com/JuanmaAgostino",
    foto:"fotoAgostino.jpeg"
  }

  const alumnoL = {
    nombre: 'Lucas Ismael',
    apellido: 'Leon',
    legajo: 61335,
    github: "https://github.com/LuquitasLeon",
    foto:"fotoLucas.jpeg"
  }
  const alumnoc = {
    nombre: 'Christian Gabriel ',
    apellido: 'Diaz',
    legajo: 61337,
    github: "https://github.com/christian22854 ",
    foto:"gamu.jpeg.jpg"
  }

  const alumno4 = {
    nombre: 'Francisco Miguel',
    apellido: 'Palacios',
    legajo: 61024,
    github: "https://github.com/260IQ",
    foto: "franfran.jpeg"
  }

  return (
    <div >
     <PaginaPrincipal alumno1={alumno1} alumnoL = {alumnoL}  alumnoc = {alumnoc} alumno4 = {alumno4} />
    </div>
  );
}

export default App;
