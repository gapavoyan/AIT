import React, { useContext } from 'react'
import "./dasntac.css"
import { LanguageContext } from './language'

function Dasntac() {
    const { language, setlanguage } = useContext(LanguageContext)
    return (
        <div>
            <div className="container">
                <div className="dasntac">
                    <h2>
                        {
                            language === "hay" ? "Դասընթացներ" : language === 'eng' ? "Courses" : "Курсы"
                        }</h2>
                </div>
                <div className="dasntacner">
                    <div className="web das">
                        <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/web_course.png' />
                            <h3>Web Development</h3>
                            <p>
                                {
                                    language === "hay" ? "6 ամիս" : language === 'eng' ? "6 month" : "6 месяц"

                                }</p>
                        </div>
                    </div>
                    <div className="uiUx das">
                        <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/ui-ux.png' />
                            <h3>UI/UX</h3>
                            <p>
                                {
                                    language === "hay" ? "2 ամիս" : language === 'eng' ? "2 month" : "2 месяц"

                                }</p>
                        </div>
                    </div>
                    <div className="smm das">
                        <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/smm.png' />
                            <h3>SMM</h3>
                            <p>
                                {
                                    language === "hay" ? "1.5 ամիս" : language === 'eng' ? "1.5 month" : "1.5 месяц"

                                }
                            </p>
                        </div>
                    </div>
                    <div className="graphicDizayn das">
                        <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/graphic-design.png' />
                            <h3>GRAPHIC DESIGN</h3>
                            <p>
                                {
                                    language === "hay" ? "2 ամիս" : language === 'eng' ? "2 month" : "2 месяц"

                                }
                            </p>
                        </div>
                    </div>
                    <div className="english das">
                        <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/english.png' />
                            <h3>English</h3>
                            <p>
                                {
                                    language === "hay" ? "2 ամիս" : language === 'eng' ? "2 month" : "2 месяц"

                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dasntac