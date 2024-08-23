export const PAGE_LIMIT: number = 5;

const findNextCharacters = (page: number) => {
  // calculate ids for the 5 characters to devide them into pages
  const arr: number[] = Array.from(
    { length: 5 },
    (elem, i) => i + 1 + (page - 1) * 5
  );
  return arr.join(",");
};

export const getCharacters = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/[${findNextCharacters(page)}]`
  );
  return response.json();
};
