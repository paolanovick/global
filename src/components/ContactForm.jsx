import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const N8N_CONTACT_WEBHOOK =
    "https://api.agenciatripnow.site/webhook/contact-form";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(N8N_CONTACT_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setStatus("success");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="w-full bg-black py-12 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-2">
          Contactanos
        </h2>
        <p className="text-gray-400 mb-8">
          Completa el formulario y nos pondremos en contacto contigo
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Nombre completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-gray-500 focus:border-gray-400 focus:outline-none transition"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-gray-500 focus:border-gray-400 focus:outline-none transition"
              placeholder="tu@email.com"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-gray-500 focus:border-gray-400 focus:outline-none transition"
              placeholder="+54 9 11 1234-5678"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Mensaje *
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 text-gray-300 placeholder-gray-500 focus:border-gray-400 focus:outline-none transition resize-none"
              placeholder="Cuéntanos sobre tu consulta..."
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
              status === "loading"
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600"
            }`}
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Enviando...
              </span>
            ) : (
              "Enviar mensaje"
            )}
          </button>

          {/* Mensajes de estado */}
          {status === "success" && (
            <div className="p-4 bg-green-900/30 border border-green-700 rounded-lg">
              <p className="text-green-300 text-sm">
                ¡Mensaje enviado con éxito! Nos contactaremos pronto.
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg">
              <p className="text-red-300 text-sm">
                Error: {errorMessage}. Por favor, intenta nuevamente.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
