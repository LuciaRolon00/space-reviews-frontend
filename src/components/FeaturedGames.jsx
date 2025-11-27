import { useFetchJuegos } from '../hooks/useFetchJuegos';
import JuegoCard from './JuegoCard.jsx';

const FeaturedGames = () => {
  const { juegos, loading, error } = useFetchJuegos();

  if (loading) return <p className="text-center text-white py-8">Cargando destacados...</p>;
  if (error) return null; 

  const juegosDestacados = juegos.slice(0, 4);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 max-w-7xl'>
      {juegosDestacados.map((juego) => (
        <JuegoCard key={juego.id} juego={juego} esHome={true} />
      ))}
    </div>
  );
};

export default FeaturedGames;