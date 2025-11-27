import { useFetchJuegos } from '../hooks/useFetchJuegos';
import ItemListContainer from '../components/ItemListContainer';

const Juegos = () => {
  const { juegos, loading, error } = useFetchJuegos();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-purple-200 text-xl font-semibold animate-pulse">Cargando juegos...</p>
      </div>
    );
  }
  if (error) return <div className="container mx-auto my-5 text-center text-red-400"><p>Error: {error}</p></div>;

  return (
    <div className="container mx-auto my-5 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-white mb-8 tracking-wide drop-shadow-lg">
        Nuestros Juegos
      </h1>
      <ItemListContainer juegos={juegos} /> 
    </div>
  );
};

export default Juegos;