import { Container } from "./styles";
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import axios from 'axios'
import { useState, FormEvent } from "react";
import { useCharacter } from "../../hooks/useCharacter";





export function Search() {
    const { setCharacters, setLoading } = useCharacter()

    const [input, setInput] = useState('')

    async function handleSearch(event: FormEvent) {
        event.preventDefault()

        try {
            timeOutSpinner()
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${input}`)
            setCharacters(response.data.results)

        } catch {
            toast.error("Personagem não existe")
            setCharacters([])
        }

        setInput('')

    }

    function timeOutSpinner() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
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

                <button
                    type="submit"
                >
                    Search
                </button>
            </form>
        </Container>

    )
}