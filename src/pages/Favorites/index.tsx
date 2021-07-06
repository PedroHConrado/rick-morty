import { useCharacter } from "../../hooks/useCharacter";
import { Container } from "./styles";

export function Favorites() {
    const { favorites } = useCharacter()
    console.log(favorites)

    return (
        <Container >
            {favorites.map(favorite => (
                <li key={favorite.id}>
                    <main id="response-character">
                        <img src={favorite.image} alt="Imagem do personagem" />
                        <h1>{favorite.name}</h1>
                    </main>
                    <h3>{favorite.status}</h3>
                    <p>{favorite.gender}</p>
                    <button
                    >
                        Fechar
                    </button>
                </li>

            ))}
        </Container>

    )
}