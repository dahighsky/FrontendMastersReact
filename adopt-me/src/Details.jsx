import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const details = useQuery(["details", id], fetchPet);
  if (details.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pet = details.data.pets[0];
  console.log(pet);
  return (
    <div className="details">
      <div>
        <div>
          {pet.images.map((item, index) => {
            {
              console.log(item);
            }
            return (
              <img
                src={`${item}`}
                alt={`Pet${index}`}
                key={index}
                height={150}
              />
            );
          })}
          {/* {pet.images[0] && (
            <img src={pet.images[0]} alt="Pet 0" height={150} />
          )}
          {pet.images[1] && (
            <img src={pet.images[1]} alt="Pet 1" height={150} />
          )}
          {pet.images[2] && (
            <img src={pet.images[2]} alt="Pet 2" height={150} />
          )}
          {pet.images[3] && (
            <img src={pet.images[3]} alt="Pet 3" height={150} />
          )} */}
        </div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
