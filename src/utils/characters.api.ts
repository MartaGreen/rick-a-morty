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

export const getCharacters = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/[${generateCharactersIds(page)}]`
  );
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

export const getPagesTotal = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
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
  return response.json();
};

const getIdFromUrl = (url: string) => {
  const characterId = url.split("https://rickandmortyapi.com/api/episode/")[1];
  return characterId;
};

export const fetchEpisods = async (episods: string[]) => {
  const episodIds = episods.map((episod) => getIdFromUrl(episod));

  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/[${episodIds}]`
  );
  return response.json();
};
