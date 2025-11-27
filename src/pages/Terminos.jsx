import { Link } from "react-router-dom";

const Terminos = () => {
  return (
    <div className="container mx-auto p-8 text-white max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Términos y Condiciones</h1>
      
      <div className="bg-[#484876] p-8 rounded-2xl shadow-xl space-y-6 text-gray-200 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">1. Introducción</h2>
          <p>
            Bienvenido a <strong>SPACE REVIEWS</strong>. Esta aplicación es un proyecto académico desarrollado como parte de la Diplomatura en Desarrollo Web Full Stack. Su propósito es puramente educativo y demostrativo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">2. Propiedad Intelectual</h2>
          <p>
            Todas las imágenes, nombres de videojuegos, logotipos y marcas comerciales mostradas en este sitio pertenecen a sus respectivos dueños y desarrolladores (como FromSoftware, Capcom, Team Cherry, etc.). Se utilizan aquí únicamente con fines ilustrativos bajo la doctrina de "uso justo" para educación.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">3. Uso del Sitio</h2>
          <p>
            Al registrarte en Space Reviews, aceptás utilizar la plataforma de manera respetuosa. Nos reservamos el derecho de eliminar cuentas que publiquen contenido ofensivo, spam o que intenten vulnerar la seguridad del sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">4. Limitación de Responsabilidad</h2>
          <p>
            Dado que este es un proyecto de demostración:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-300">
            <li>No garantizamos que el servicio esté disponible el 100% del tiempo.</li>
            <li>La base de datos podría ser reiniciada periódicamente, eliminando usuarios o reseñas guardadas.</li>
            <li>No utilices contraseñas reales o sensibles en este sitio.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">5. Contacto</h2>
          <p>
            Si tenés alguna duda sobre este proyecto o querés contactar al desarrollador, podés hacerlo a través de la sección de <Link to="/contacto" className="text-indigo-400 hover:underline">Contacto</Link>.
          </p>
        </section>

        <hr className="border-t border-gray-500/30 my-6" />

        <div className="text-center">
          <Link to="/" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
            Volver al Inicio
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Terminos;