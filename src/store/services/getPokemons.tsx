import { HttpService } from "libs/httpService";

export const getPokemons = async () => {
  return await HttpService.get(encodeURI("/pokemons.json"));
};
