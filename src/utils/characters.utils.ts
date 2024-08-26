import { CharacterT } from "@components/Characters/CharacterType";

export type SortTypesT =
  | "name"
  | "status"
  | "gender"
  | "species"
  | "created"
  | "origin";

export const charactersSort = (
  characters: CharacterT[],
  sortType: SortTypesT,
  desc: boolean = false
) => {
  return [...characters].sort((char1: CharacterT, char2: CharacterT) => {
    // Compare characters by the according sort type
    let comparison;

    if (sortType === "origin")
      comparison = char1[sortType].name.localeCompare(char2[sortType].name);
    else comparison = char1[sortType].localeCompare(char2[sortType]);

    // If desc is true, reverse the order
    return desc ? -comparison : comparison;
  });
};
