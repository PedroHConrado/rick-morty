import axios from "axios"
import { ImHeart } from "react-icons/im"
import { useCharacter } from "../../hooks/useCharacter"
import { Container } from "./styles"

export function Card() {
    const { characters, favorites, setFavorites } = useCharacter()

    async function handleAddFavorite(id: number) {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        console.log(id)
        console.log(res.data)
        setFavorites([...favorites, res.data])
    }

    return (
        <Container>
            {characters.map(char => (
                <li key={char.id}>
                    <main id="response-character">
                        <img src={char.image} alt="Imagem do personagem" />
                        <h1>{char.name}</h1>
                    </main>
                    <h3>{char.status}</h3>
                    <p>{char.gender}</p>
                    <button
                        type="button"
                        onClick={() => handleAddFavorite(char.id)}>
                        <ImHeart style={{ margin: 30, fontSize: 40 }} />
                    </button>
                </li>

            ))}
        </Container>
    )

}