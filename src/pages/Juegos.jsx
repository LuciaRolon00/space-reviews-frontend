import { useFetchJuegos } from '../hooks/useFetchJuegos';
import ItemListContainer from '../components/ItemListContainer';

const Juegos = () => {
  const { juegos, loading, error } = useFetchJuegos();

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-20">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-purple-200 text-xl font-semibold animate-pulse">
          Cargando juegos...
        </p>
      </div>
    );
}


  if (error) {
    return (
      <div className="container mx-auto my-5 flex justify-center items-center min-h-[50vh]">
        <div className="bg-red-900/30 p-8 rounded-xl border border-red-500/50 backdrop-blur-sm text-center max-w-lg">
          <h2 className="text-3xl mb-4">⚠️</h2>
          <h2 className="text-2xl text-red-300 font-bold mb-2">Error de Comunicación</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

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