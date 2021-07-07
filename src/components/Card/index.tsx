import axios from "axios"
import { useState } from "react"
import { ImHeart } from "react-icons/im"
import { useCharacter } from "../../hooks/useCharacter"
import { Container } from "./styles"
import { Oval } from 'react-loading-icons'

export function Card() {
    const { characters, favorites, setFavorites, loading } = useCharacter()
    const [active, setActive] = useState(false);

    async function handleAddFavorite(id: number) {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setFavorites([...favorites, res.data])
        setActive(!active)

    }

    return (
        <Container>

            {loading ? (
                <Oval className="spinner" stroke="gray" />
            ) : (
                characters.map(char => (
                    <li key={char.id}>
                        <main id="response-character">
                            <img src={char.image} alt="Imagem do personagem" />
                            <h1>{char.name}</h1>
                        </main>
                        <h3>{char.status}</h3>
                        <p>{char.gender}</p>
                        <button
                            type="button"
                            onClick={() => handleAddFavorite(char.id)}

                        >
                            {active ? (
                                <ImHeart className="heart" style={{ margin: 30, fontSize: 40, color: 'red' }} />
                            ) : (
                                <ImHeart className="heart" style={{ margin: 30, fontSize: 40 }} />
                            )}
                        </button>
                    </li>
                )))
            }
        </Container>
    )

}