import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DescJuego() {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJuego = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';
        const response = await fetch(`${API_URL}/juegos/${id}/`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Juego no encontrado');
          }
          throw new Error('No se pudo cargar la información del juego.');
        }

        const data = await response.json();
        setJuego(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJuego();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-purple-200 text-xl font-semibold animate-pulse">Analizando datos del juego...</p>
      </div>
    );
  }

  // Si no se encuentra el juego o hay otro error, se muestra un msj
  if (error) {
    return (
      <div className="container mx-auto p-8 text-white text-center">
        <h2 className="text-2xl text-red-400">Error: {error}</h2>
        <Link to="/" className="text-indigo-400 hover:underline mt-4 inline-block">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Imagen del juego */}
        <div className="w-full flex justify-center">
          <img
            src={juego.imagen}
            alt={`Portada de ${juego.titulo}`}
            className="rounded-lg shadow-lg shadow-purple-900/50 w-full max-w-lg object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold mb-2">{juego.titulo}</h1>

          <div className="mb-4">
            <p className="text-yellow-400 text-2xl">
              {'⭐'.repeat(juego.estrellas)}
            </p>
          </div>

          {/* Bloque de Detalles Técnicos */}
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Desarrollador */}
            {juego.desarrollador && (
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800 px-3 py-1 rounded-full border border-gray-600">
                👨‍💻 <span className="font-semibold">{juego.desarrollador}</span>
              </div>
            )}

            {/* Género */}
            {juego.genero && (
              <div className="flex items-center gap-2 text-sm text-purple-200 bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30">
                🎮 <span className="font-semibold">{juego.genero}</span>
              </div>
            )}

            {/* Plataforma */}
            {juego.plataforma && (
              <div className="flex items-center gap-2 text-sm text-blue-200 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-500/30">
                🖥️ <span className="font-semibold">{juego.plataforma}</span>
              </div>
            )}
          </div>

          {/* Descripción */}
          <div className="bg-[#5B5283] bg-opacity-50 p-4 rounded-lg border border-purple-500/50">
            <p className="text-lg text-gray-200 leading-relaxed">
              {juego.descripcion}
            </p>
          </div>

          <hr className="my-4 border-t border-slate-400/30" />

          <div className="mt-4">
            <Link to="/juegos" className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer">
              ← Volver al Listado
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};