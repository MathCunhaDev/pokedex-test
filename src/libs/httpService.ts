import axios from "axios";

export const HttpService = axios.create({
  baseURL: "https://unpkg.com/pokemons@1.1.0",
});
