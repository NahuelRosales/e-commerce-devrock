import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../components/Layout";
import Carrito from "../containers/Carrito";
import Home from "../containers/Home";
import Producto from "../containers/Producto";
import UsarContexto from "../context/usarContexto";

function App() {
  return (
    <>

      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/carrito" element={<Carrito />}></Route>
              <Route path="/producto" element={<Producto />}></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>
    </>
  );
}

export default App;
