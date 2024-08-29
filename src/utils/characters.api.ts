/* Amount of characters per page */
export const PAGE_SIZE: number = 5;

/**
 * Returns a comma-separated string of the next 5 character IDs based on the page number
 * to separate characters into pages.
 *
 * Calculates character IDs in sets of 5, depending on the page.
 * For page 1, returns IDs 1-5; for page 2, returns IDs 6-10, and so on.
 *
 * @param {number} page - The current page number (starting from 1).
 * @returns {string} - A string of 5 character IDs, separated by commas.
 */
const generateCharactersIds = (page: number) => {
  // calculate ids for the 5 characters to devide them into pages
  const arr: number[] = Array.from(
    { length: PAGE_SIZE },
    (elem, i) => i + 1 + (page - 1) * PAGE_SIZE
  );
  return arr.join(",");
};

// fetch next PAGE_SIZE(5) characters according to the next page number
export const fetchNextCharacters = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/[${generateCharactersIds(page)}]`
  );
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
};

type PagesResponseT = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
};

// Calculates the number of pages based on total number of characters and page size
export const calculateTotalPages = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  if (!response.ok) throw new Error(response.statusText);
  const totalResponse = response.json().then((data: PagesResponseT) => {
    const charactersTotal = data.info.count;
    return Math.ceil(charactersTotal / PAGE_SIZE);
  });

  return totalResponse;
};

export const fetchCharacterDetails = async (characterId: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/[${characterId}]`
  );
  if (!response.ok) throw new Error(response.statusText);
  return response.json();
};
