import { createContext, ReactNode, useContext, useState } from 'react'

interface CharactersProps {
    name: string;
    gender: string;
    image: string;
}

interface CharacterProviderProps {
    children: ReactNode;
}

interface CharacterContextData {
    char: CharactersProps[];
    setChar: (char: CharactersProps[]) => void;
}


const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData)

export function CharacterProvider({ children }: CharacterProviderProps) {
    const [char, setChar] = useState<CharactersProps[]>([])

    return (
        <CharacterContext.Provider value={{ char, setChar }}>
            {children}
        </CharacterContext.Provider>
    )
}

export function useCharacter() {
    const context = useContext(CharacterContext)

    return context;
}