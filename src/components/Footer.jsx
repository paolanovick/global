import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://api.agenciatripnow.site/webhook/footer-newsletter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      

      if (!response.ok) throw new Error("Error al suscribirse");

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-12 h-12" />
            <span className="font-bold text-xl">Global</span>
          </div>
          <div className="text-sm text-slate-300">
            Av. Ejemplo 123, Ciudad, País
          </div>
          <div className="text-sm text-slate-300">contacto@global.com</div>
          <div className="text-sm text-slate-300">+54 11 1234-5678</div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Secciones</h4>
          <ul className="text-sm text-slate-300 space-y-2">
            <li className="hover:text-white cursor-pointer">Inicio</li>
            <li className="hover:text-white cursor-pointer">Destinos</li>
            <li className="hover:text-white cursor-pointer">Promociones</li>
            <li className="hover:text-white cursor-pointer">Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal & Newsletter</h4>
          <ul className="text-sm text-slate-300 space-y-2 mb-4">
            <li className="hover:text-white cursor-pointer">
              Política de privacidad
            </li>
            <li className="hover:text-white cursor-pointer">
              Términos y condiciones
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="px-3 py-2 rounded-md text-slate-800"
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={`px-3 py-2 rounded-md text-white ${
                status === "loading"
                  ? "bg-gray-500"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {status === "loading" ? "Enviando..." : "Suscribirse"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-400">¡Suscripción exitosa!</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Error al suscribirse</p>
            )}
          </form>
        </div>
      </div>

      <div className="text-center text-slate-400 text-sm py-4 border-t border-slate-800">
        © {new Date().getFullYear()} Global. Todos los derechos reservados.
      </div>
    </footer>
  );
}
