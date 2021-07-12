import axios from "axios"
import { useState } from "react"
import { ImHeart } from "react-icons/im"
import { useCharacter } from "../../hooks/useCharacter"
import { Container } from "./styles"
import { Oval } from 'react-loading-icons'
import { toast } from "react-toastify"



export function Card() {
    const { characters, favorites, setFavorites, loading } = useCharacter()
    const [activeButtons, setActiveButtons] = useState<Number[]>([]);

    async function handleAddFavorite(id: number) {

        if (favorites.find(item => item.id === id)) {
            toast.error('Personagem já foi adicionado')

        } else {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setFavorites([...favorites, res.data])

            setActiveButtons([
                ...activeButtons,
                id
            ])

        }


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
                            {
                                (favorites.find(item => item.id === char.id)) ? (
                                    <ImHeart className="heart" style={{ margin: 30, fontSize: 40, color: 'red' }} />
                                ) : (
                                    <ImHeart className="heart" style={{ margin: 30, fontSize: 40 }} />
                                )
                            }

                        </button>
                    </li>

                )))
            }

        </Container>
    )

}