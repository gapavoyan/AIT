import React, { useState, createContext } from 'react'
export const LanguageContext = createContext();
function Language({ children }) {
    const [language, setLanguage] = useState("hay")
    const changeLanguage = (leng) => {
        setLanguage(leng)
    }
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default Language

