import React, { useContext } from 'react'
import "./inform.css"
import { LanguageContext } from './language'

function Inform() {
    const { language, setlanguage } = useContext(LanguageContext)

    return (
        <div>
            <div className="containerInform">
                <div className="inform">
                    <p>
                        {
                            language === "hay" ? "Ի՞նչ կտա ձեզ AIT-ն" : language === 'eng' ? "What will AIT give you?" : "Что вам даст АИТ?"

                        }</p>
                </div>
                <div className='hatuk'>
                    <div className="informAit">
                        <div className="krknutyun divs">
                            <div className="imgTiv">
                                <img src='https://aitschool.am/images/number1.svg' />
                            </div>
                            <div className="krknutyunInform">
                                <h2>
                                    {
                                        language === "hay" ? "Կրթություն" : language === 'eng' ? "Education" : "Образование"

                                    }</h2>
                                <p>
                                    {
                                        language === "hay" ? "Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր <br /> ծրագրավորման հիմնարար գիտելիքներ: Ինչպես<br /> նաև կարող եք ուսանել Graphic Design, UI/UX <br /> Design, SMM և Անգլերեն" : language === 'eng' ? "ake the 10-month course and gain basic programming knowledge. You can also study Graphic Design, UI/UX Design, SMM and English" : "Пройдите 10-месячный курс и получите базовые знания в области программирования. Вы также можете изучать графический дизайн, дизайн UI / UX, SMM и английский язык."

                                    }</p>
                            </div>
                        </div>
                        <div className="praktika divs">
                            <div className="imgTiv">
                                <img className='nkarPraktika' src='https://aitschool.am/images/number2.svg' />
                            </div>
                            <div className="krknutyunInform">
                                <h2>
                                    {
                                        language === "hay" ? "Պրակտիկա" : language === 'eng' ? "Practice" : "Упражняться"

                                    }</h2>
                                <p>
                                    {
                                        language === "hay" ? "Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող ծրագրավորման ընկերությունում։ Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա։" : language === 'eng' ? "After completing the course, take a trial period at a programming company operating under the school. Apply your knowledge by working on real projects." : "После прохождения курса пройдите испытательный срок в компании-разработчике, работающей при школе. Применяйте свои знания, работая над реальными проектами."

                                    }</p>
                            </div>
                        </div>
                        <div className="gorc divs">
                            <div className="imgTiv">
                                <img src='https://aitschool.am/images/number3.svg' />
                            </div>
                            <div className="krknutyunInform">
                                <h2>
                                    {
                                        language === "hay" ? "Աշխատանք" : language === 'eng' ? "Work" : "Работа"

                                    }</h2>
                                <p>
                                    {
                                        language === "hay" ? "Ստացի՛ր մեր թիմին միանալու հնարավորություն։ Մեր ուսանողները կազմում են մեր թիմի 80%ը։" : language === 'eng' ? "Get a chance to join our team. Our students make up 80% of our team." : "Получите шанс присоединиться к нашей команде. Наши студенты составляют 80% нашей команды."

                                    }</p>
                            </div>
                        </div>
                    </div>
                    <div className='globusiDiv'>
                        <img src='https://aitschool.am/images/globus.png' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Inform