// Extract ID from the URL
const getEpisodId = (url: string) => {
  const characterId = url.split("https://rickandmortyapi.com/api/episode/")[1];
  return characterId;
};

export const fetchEpisods = async (episods: string[]) => {
  const episodIds = episods.map((episod) => getEpisodId(episod));

  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/[${episodIds}]`
  );
  return response.json();
};
