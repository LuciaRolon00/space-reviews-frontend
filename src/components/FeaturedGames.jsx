import { useEffect, useState } from 'react';
import JuegoCard from './JuegoCard.jsx';

const FeaturedGames = () => {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestacados = async () => {
      setLoading(true);
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
        const response = await fetch(`${API_URL}/juegos/`);

        if (!response.ok) throw new Error("No se pudo cargar los juegos");

        const data = await response.json();
        setJuegos(data.slice(0, 4)); // solo las novedades
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestacados();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-purple-200 text-lg font-semibold animate-pulse">
          Cargando destacados...
        </p>
      </div>
    );
  }

  if (error) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 max-w-[95%] mx-auto">
      {juegos.map(juego => (
        <JuegoCard key={juego.id} juego={juego} esHome={true} />
      ))}
    </div>
  );
};

export default FeaturedGames;
