import { useFetchJuegos } from '../hooks/useFetchJuegos';
import JuegoCard from './JuegoCard.jsx';

const FeaturedGames = () => {
  const { juegos, loading, error } = useFetchJuegos();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-purple-200 text-lg font-semibold animate-pulse">Cargando destacados...</p>
      </div>
    );
  }
  if (error) return null; 

  const juegosDestacados = juegos.slice(0, 4);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 max-w-[95%] mx-auto'>
      {juegosDestacados.map((juego) => (
        <JuegoCard key={juego.id} juego={juego} esHome={true} />
      ))}
    </div>
  );
};

export default FeaturedGames;