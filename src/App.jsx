import Primer from "./components/Primer"
import Segundo from "./components/Segundo"
import Tercero from "./components/Tercero"
import Cuarto from "./components/Cuarto"
import Quinto from "./components/Quinto"
import Imagen from "./components/Imagen"


function App() {

  return (
    <>
      <div className="app">
        <Primer />
        <Segundo />
        <Tercero />
        <Imagen/>
      </div >
      <Quinto/>
        <Cuarto />

    </>
  )
}


export default App
