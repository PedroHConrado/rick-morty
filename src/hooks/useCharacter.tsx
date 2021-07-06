import { createContext, ReactNode, useContext, useState } from 'react'

interface CharactersProps {
    id: number;
    name: string;
    gender: string;
    image: string;
    status: string;
}

interface CharacterProviderProps {
    children: ReactNode;
}

interface CharacterContextData {
    characters: CharactersProps[];
    favorites: CharactersProps[];
    setCharacters: (char: CharactersProps[]) => void;
    setFavorites: (char: CharactersProps[]) => void;
}


const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData)

export function CharacterProvider({ children }: CharacterProviderProps) {
    const [characters, setCharacters] = useState<CharactersProps[]>([])
    const [favorites, setFavorites] = useState<CharactersProps[]>([])


    return (
        <CharacterContext.Provider value={{ characters, setCharacters, favorites, setFavorites }}>
            {children}
        </CharacterContext.Provider>
    )
}

export function useCharacter() {
    const context = useContext(CharacterContext)

    return context;
}