import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
const ANIMALS = [`bird`, `cat`, `dog`, `rabbit`, `reptile`];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    searchPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function searchPets() {
    const res = await fetch(
      // `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();
    setPets(json.pets);
  }
  //   const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal}> {animal} </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            disabled={breeds.length === 0}
          >
            <option></option>
            {breeds.map((breed) => (
              <option key={breed}> {breed} </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {/* {pets.map((pet) => (
        <Pet
          name={pet.name}
          breed={pet.breed}
          animal={pet.animal}
          key={pet.id}
        />
      ))} */}
      {<Results pets={pets} />}
    </div>
  );
};

export default SearchParams;
