import React, { useContext } from 'react'
import "./welcome.css"
import { LanguageContext } from './language'

function Welcome() {
    const { language, setlanguage } = useContext(LanguageContext)
    return (
        <div>
            <div className='content'>
                <div className='welcome'>
                    <div className="text-content">
                        <h1 className='ararat'>Ararat</h1>
                        <h3 className='itSchool'>IT School</h3>
                        <p className='discover'>
                            {
                                language === "hay" ? "Բացահայտիր IT անսահման հնարավորությունները" : language === 'eng' ? "Discover the endless possibilities of IT" : "Откройте для себя безграничные возможности ИТ"
                            }</p>
                        <button className='button'>
                            {
                                language === "hay" ? "Դասընթացներ" : language === 'eng' ? "Courses" : "Курсы"
                            }</button>
                    </div>
                </div>
                <div className="imgWelcome">
                    <div className='imageDiv'>
                        <img src='https://aitschool.am/images/main_image.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome