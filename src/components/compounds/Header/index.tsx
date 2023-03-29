import pokeball from "assets/images/pokeball.png";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo src={pokeball} alt="Imagem de uma pokebola" />
      <S.HeaderTitle>Pokédex</S.HeaderTitle>
      <S.HeaderFavorites>Ver favoritos</S.HeaderFavorites>
    </S.Header>
  );
};
