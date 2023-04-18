const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const response = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  const data = await response.json();
  if (!response.ok) {
    console.log("Error fetching the Pet Info");
    throw new Error(`details/${id} fetch not successful`);
  }

  return data;
};

export default fetchPet;
