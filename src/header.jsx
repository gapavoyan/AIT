import React, { useContext } from 'react'
import "./header.css"
import { LanguageContext } from './language'
import Option from './option'
function Header() {
    const { language, setlanguage } = useContext(LanguageContext)
    return (
        <div>
            <header>
                <div className='imgDiv'>
                    <img src='https://aitschool.am/images/Ait-Logo.svg' />
                </div>
                <div className='navDiv'>
                    <nav>
                        <ul className='navList'>
                            <li>
                                {
                                    language === "hay" ? "Գլխավոր" : language === 'eng' ? "Home" : "Основной"
                                }
                            </li>
                            <li>
                                {
                                    language === "hay" ? "Դասընթացներ" : language === 'eng' ? "Courses" : "Курсы"
                                }</li>
                            <li>
                                {
                                    language === "hay" ? "Գրանցում" : language === 'eng' ? "Registration" : "Регистрация"
                                }</li>
                            <li>
                                {
                                    language === "hay" ? "Մեր մասին" : language === 'eng' ? "Аbout us" : "О нас"
                                }</li>
                            <li>
                                {
                                    language === "hay" ? "Բլոգ" : language === 'eng' ? "Blog" : "Блог"
                                }</li>
                            <li>
                                {
                                    language === "hay" ? "Կապ" : language === 'eng' ? "Contact" : "Контакт"
                                }</li>
                        </ul>

                    </nav>
                </div>
                <div>
                    <Option />
                </div>

            </header>
        </div>
    )
}

export default Header