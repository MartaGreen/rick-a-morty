export type StatusT = "Alive" | "Dead" | "unknown";
export type GenderT = "Female" | "Male" | "Genderless" | "unknown";

export type CharacterT = {
  id: number;
  name: string;
  status: StatusT;
  species: string;
  type: GenderT;
  gender: GenderT;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type SortTypesT =
  | "name"
  | "status"
  | "gender"
  | "species"
  | "created"
  | "origin";
