// Componente para mostrar las cards de los juegos
import { useState } from "react";
import { Link } from "react-router-dom";

export default function JuegoCard({ juego, esHome = false }) {
  const [favorito, setFavorito] = useState(false);
  const [expandido, setExpandido] = useState(false);

  const MAX_CARACTERES = 140;

  const handleToggleFavorito = () => {
    setFavorito(!favorito);
  };

  const textoBoton = favorito ? "Quitar de Favoritos 💔" : "Agregar a Favoritos ❤️";
  const clasesBoton = favorito
    ? "bg-red-500 hover:bg-red-600"
    : "bg-yellow-400 hover:bg-yellow-500";

  const esLargo = juego.descripcion.length > MAX_CARACTERES;
  
  const descripcionMostrar = 
    !expandido && esLargo
      ? juego.descripcion.substring(0, MAX_CARACTERES) + "..." 
      : juego.descripcion;

  // Si es Home usa se ve grande, sino mas chico
  const alturaImagen = esHome ? "h-200" : "h-64";

  return (
    <article className="overflow-hidden rounded-2xl bg-[#484876] flex flex-col h-full transition-shadow hover:shadow-xl hover:shadow-purple-900/20">
      {/* IMAGEN */}
      <Link to={`/juego/${juego.id}`} className="block overflow-hidden">
        <img
          src={juego.imagen}
          alt={`Portada del juego ${juego.titulo}`}
          className={`${alturaImagen} w-full object-cover transition-transform duration-500 hover:scale-110`}
          loading="lazy"
        />
      </Link>

      {/* TITULO Y ESTRELLAS */}
      <div className="flex flex-col flex-grow p-5 text-white">
        
        <div className="flex justify-between items-start mb-3 gap-2">
          <h4 className="text-xl font-bold leading-snug flex-1">{juego.titulo}</h4>
          <div className="text-yellow-400 text-sm whitespace-nowrap mt-1">
            {"⭐".repeat(juego.estrellas)}
          </div>
        </div>

        {/* OPCION VER MAS */}
        <div className="mb-4 flex-grow">
          <p className="text-sm text-gray-300 leading-relaxed inline">
            {descripcionMostrar}
          </p>
          
          {esLargo && (
            <button 
              onClick={() => setExpandido(!expandido)}
              className="ml-2 text-xs font-bold text-indigo-300 hover:text-white hover:underline transition-colors focus:outline-none"
            >
              {expandido ? "(Ver menos)" : "(Ver más)"}
            </button>
          )}
        </div>
          
        {/* BOTONES */}
        <hr className="my-3 border-t border-white/10" />

        <div className="mt-auto flex flex-col gap-3">
          <button
            type="button"
            className={`w-full rounded-lg px-4 py-2.5 text-sm font-bold text-black transition-all duration-200 shadow-md active:scale-95 ${clasesBoton}`}
            onClick={handleToggleFavorito}
          >
            {textoBoton}
          </button>

          <Link
            to={`/juego/${juego.id}`}
            className="text-center text-sm font-medium text-indigo-300 hover:text-white transition-colors hover:underline decoration-indigo-500 underline-offset-4"
          >
            Ver Detalles →
          </Link>
        </div>
      </div>
    </article>
  );
}