import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-12 h-12" />
            <span className="font-bold">Global</span>
          </div>
          <div className="text-sm text-slate-300">
            Av. Ejemplo 123, Ciudad, País
          </div>
          <div className="text-sm text-slate-300">contacto@global.com</div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Secciones</h4>
          <ul className="text-sm text-slate-300 space-y-2">
            <li>Inicio</li>
            <li>Destinos</li>
            <li>Promociones</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal & Newsletter</h4>
          <ul className="text-sm text-slate-300 space-y-2 mb-3">
            <li>Política de privacidad</li>
            <li>Condiciones generales</li>
          </ul>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="tu@email.com"
              className="px-3 py-2 rounded-md text-slate-800"
            />
            <button className="px-3 py-2 rounded-md bg-blue-600 text-white">
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-slate-400 text-sm py-4">
        © {new Date().getFullYear()} Global. Todos los derechos reservados.
      </div>
    </footer>
  );
}
