import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Estados para la animación del newsletter
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    setStatus("loading");

    // Simula una espera
    setTimeout(() => {
      setStatus("success"); 
      setEmail(""); 
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 2000);
  };

  return (
    <footer className="bg-[#1A202C] text-gray-300 py-12">
      <div className="container mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Nombre */}
          <div>
            <h3 className="text-xl font-bold text-white">SPACE REVIEWS</h3>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white hover:underline">Inicio</Link></li>
              <li><Link to="/juegos" className="hover:text-white hover:underline">Juegos</Link></li>
              <li><Link to="/contacto" className="hover:text-white hover:underline">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terminos" className="hover:text-white hover:underline">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad" className="hover:text-white hover:underline">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Suscribite a nuestro Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter" className="sr-only">Correo electrónico</label>
              <input 
                id="newsletter"
                type="email" 
                placeholder="tu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
                required
                disabled={status === 'loading' || status === 'success'}
              />
              
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`
                  font-bold py-2 px-4 rounded-md transition-all duration-300 min-w-[120px] flex justify-center items-center
                  ${status === 'success' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-purple-600 hover:bg-purple-700 text-white'}
                  ${status === 'loading' ? 'cursor-wait' : ''}
                `}
                aria-label="Suscribirse al newsletter"
              >
                {status === 'idle' && "Suscribirme"}

                {status === 'loading' && (
                  // Spinner
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}

                {status === 'success' && (
                  // Msj de éxito con check
                  <span className="flex items-center gap-1">
                    ¡Listo! ✓
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {currentYear} SPACE REVIEWS. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;