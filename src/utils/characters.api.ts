export const PAGE_LIMIT: number = 5;

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
const findNextCharacters = (page: number) => {
  // calculate ids for the 5 characters to devide them into pages
  const arr: number[] = Array.from(
    { length: 5 },
    (elem, i) => i + 1 + (page - 1) * 5
  );
  return arr.join(",");
};

export const getCharacters = async (page: number) => {
  console.log("Fetching new characters.... \nPage: ", page);
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/[${findNextCharacters(page)}]`
  );
  return response.json();
};
