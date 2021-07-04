import { Container } from "./styles";
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import axios from 'axios'
import { useState, useEffect, FormEvent } from "react";
import { useCharacter } from "../../hooks/useCharacter";

type CharactersProps = {
    name: string;
    gender: string;
    image: string;
}


export function Search() {
    const { setChar } = useCharacter()
    const [character, setCharacter] = useState<CharactersProps[]>([])
    const [input, setInput] = useState('')

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then((response) => { setCharacter(response.data.results) })

    }, [])


    async function handleSearch(event: FormEvent) {
        event.preventDefault()



        if (character.filter(char => char.name === input)) {
            const newChar = character.filter(char => char.name === input)
            setChar(newChar)
        } else {
            console.log('Erro')
            toast.error('Personagem não encontrado')
        }

        setInput('')

    }

    return (
        <Container>
            <form onSubmit={handleSearch}>
                <div className="search">
                    <GoSearch style={{ margin: -30, fontSize: 30 }} />
                    <input
                        type="text"
                        placeholder="Search character"
                        onChange={event => setInput(event.target.value)}
                        value={input}
                    />
                </div>

                <button type="submit">Search</button>
            </form>
        </Container>

    )
}