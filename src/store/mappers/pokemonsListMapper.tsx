import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PokemonDataProps } from "models/homeContextProps";
import { map } from "lodash";

export const pokemonsListMapper = async (
  data: PokemonDataProps[],
  setFavorite: (favorite: string) => void
) => {
  return map(data, (item: PokemonDataProps) => ({
    key: `${item.evolution?.name ? item.evolution?.name : item.name}`,
    image: <img src={item.sprites.normal} alt={item.name} />,
    name: `${item.evolution?.name ? item.evolution?.name : item.name}`,
    registry: item.national_number,
    types: item.type,
    favorite: (
      <FontAwesomeIcon
        onClick={() => setFavorite(item.national_number)}
        icon={faHeart}
        size="2x"
      />
    ),
  }));
};
