import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar"
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/NuevoPassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import Gastos from "./paginas/Gastos";
import './App.css'
import RutaProtegida from "./layouts/RutaProtegida";
import { AuthProvider } from "./context/AuthProvider";

console.log(import.meta.env.VITE_BACKEND_URL)

function App() {
  return (
     
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
          </Route>

          {<Route path="/gastos">
            <Route index element={<Gastos/>}/>
          </Route>}
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
