import JuegoCard from './JuegoCard.jsx';

const ItemListContainer = ({ juegos }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8'>
      {juegos.map((juego) => (
        <JuegoCard key={juego.id} juego={juego} />
      ))}
    </div>
  );
};

export default ItemListContainer;
