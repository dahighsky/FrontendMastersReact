import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              breed={pet.breed}
              name={pet.name}
              location={`${pet.city}, ${pet.state}`}
              key={pet.id}
              images={pet.images}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
