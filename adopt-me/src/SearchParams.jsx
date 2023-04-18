import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
import fetchSearch from "./fetchSearch";
import Results from "./Results";
const ANIMALS = [`bird`, `cat`, `dog`, `rabbit`, `reptile`];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    animal: "",
    location: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const breedList = useQuery(["animal breeds", animal], fetchBreedList);
  if (breedList.isLoading) {
    console.log("Loading");
  }
  const breeds = breedList?.data?.breeds ?? [];
  const searchResult = useQuery(["Request Params", requestParams], fetchSearch);
  const pets = searchResult?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          console.log(formData);
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" name="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            name="animal "
            onChange={(e) => {
              setAnimal(e.target.value);
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
          <select id="breed" name="breed" disabled={breeds.length === 0}>
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
