import React, { useState, createContext } from 'react';


const initialState = { 'Aleksey': 0 };
export const GameContext = createContext(initialState);

const GameProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const setScore = (name, value) => setState(prevState => ({ [name]: (prevState[name] || 0) + value }));
    return (
        <GameContext.Provider value={{ state, setScore }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;