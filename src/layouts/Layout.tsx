import {Outlet} from 'react-router-dom'

export default  function Layout(){
    return (
        <>
  <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-white">
           Administrador de productos
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition">Inicio</a>
            <a href="#" className="hover:text-gray-300 transition">Servicios</a>
            <a href="#" className="hover:text-gray-300 transition">Proyectos</a>
            <a href="#" className="hover:text-gray-300 transition">Contacto</a>
          </nav>

        </div>
      </div>
    </header>
    <main className='mt-10 mx-auto max-w-6xl p-10 bg-white shadow'>
        <Outlet/>
    </main>
    
        </>
    )
}