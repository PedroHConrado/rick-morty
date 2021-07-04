import { Container } from "./styles";
import { ImHeart } from "react-icons/im";
import { useCharacter } from "../../hooks/useCharacter";



export function Dashboard() {
    const { char } = useCharacter()

    return (
        <Container>
            {char.map(char => (
                <ul key={char.name}>
                    <main id="response-character">
                        <img src={char.image} alt="" />
                        <h1>{char.name}</h1>
                    </main>
                    <p>{char.gender}</p>
                    <button><ImHeart style={{ margin: 30, fontSize: 50 }} /></button>
                </ul>

            ))}

        </Container>

    )
}