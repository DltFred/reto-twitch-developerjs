import { Link } from "react-router-dom"

const Login = () => {


  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl uppercase'>Inicia sesión y administra tus <span className="text-slate-700">gastos</span></h1>

      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="Email"
          >Correo Electrónico</label>
          <input 
          id="Email"
          type="email"
            placeholder="Ingrese el correo electrónico"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50" />
        </div>
        <div className="my-5">
          <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="Password"
          >Contraseña</label>
          <input 
          id="Password"
          type="password"
            placeholder="Ingrese la contraseña del usuario"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50" />
        </div>

        <input type="submit" value="Iniciar Sesión" className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"/>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-900 uppercase text-lg"
          to="/registrar"
        >
          ¿No tienes una cuenta? Registrate
        </Link>

        <Link
          className="block text-center my-5 text-slate-900 uppercase text-lg"
        to="/olvide-password"
        >
          Olvide Mi Contraseña
        </Link>
      </nav>
    </>
  )
}

export default Login