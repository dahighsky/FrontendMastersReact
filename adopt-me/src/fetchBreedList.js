const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  if (!animal) return [];
  const response = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  const data = await response.json();
  if (!response.ok) {
    console.log("Error fetching the Pet Info");
    throw new Error(`breeds/${animal} fetch not successful`);
  }

  return data;
};

export default fetchBreedList;
