import { useCharacter } from "../../hooks/useCharacter";
import { Container } from "./styles";
import { AiFillCloseCircle } from 'react-icons/ai'
import { toast } from 'react-toastify'

export function Favorites() {
    const { favorites, setFavorites } = useCharacter()
    console.log(favorites)

    const removeFavorite = (id: number) => {
        try {
            const newFavorites = [...favorites]
            const favoriteIndex = newFavorites.findIndex(favorite => favorite.id === id)

            if (favoriteIndex >= 0) {
                newFavorites.splice(favoriteIndex, 1)
                setFavorites(newFavorites)
                localStorage.setItem('@RocketShoes:cart', JSON.stringify(newFavorites))
            } else {
                throw Error();
            }
        } catch {
            toast.error('Erro na remoção do produto')
        }
    };

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
                    <button onClick={() => removeFavorite(favorite.id)}>
                        <AiFillCloseCircle style={{ fontSize: 40 }} />
                    </button>
                </li>

            ))}
        </Container>

    )
}