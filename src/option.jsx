import React, { useContext, } from 'react'
import { LanguageContext } from './language'
function Option() {
    const { language, changeLanguage } = useContext(LanguageContext)
    return (
        <div>
            <select value={language} onChange={(e) => {
                changeLanguage(e.target.value)
            }}>
                <option value='hay'>Հայերեն</option>
                <option value="eng">English</option>
                <option value="rus">Русский</option>
            </select>
        </div>
    )
}

export default Option