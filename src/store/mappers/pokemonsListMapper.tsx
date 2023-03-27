import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PokemonDataProps } from "models/homeContextProps";
import { map } from "lodash";

export const pokemonsListMapper = async (
  data: PokemonDataProps[],
  favorites: string[],
  setFavorite: (favorite: string[]) => void
) => {
  return map(data, (item: PokemonDataProps) => ({
    key: `${item.evolution?.name ? item.evolution?.name : item.name}`,
    image: <img src={item.sprites.normal} alt={item.name} />,
    name: `${item.evolution?.name ? item.evolution?.name : item.name}`,
    registry: item.national_number,
    types: `${item.type[0]}, ${item.type[1]}`,
    favorite: (
      <FontAwesomeIcon
        onClick={() => setFavorite(() => [...favorites, item.national_number])}
        icon={faHeartCirclePlus}
        size="2x"
        style={{ color: "#F522424" }}
      />
    ),
  }));
};
