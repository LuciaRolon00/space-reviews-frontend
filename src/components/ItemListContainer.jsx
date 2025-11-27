import JuegoCard from './JuegoCard.jsx';

const ItemListContainer = ({ juegos }) => {

  if (!juegos || juegos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-20">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-purple-200 text-xl font-semibold animate-pulse">
          Cargando juegos...
        </p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8'>
      {juegos.map((juego) => (
        <JuegoCard key={juego.id} juego={juego} />
      ))}
    </div>
  );
};

export default ItemListContainer;