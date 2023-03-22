import React from 'react'
import "./inform.css"
function Inform() {
    return (
        <div>
            <div className="containerInform">
                <div className="inform">
                    <p>Ի՞նչ կտա ձեզ AIT-ն</p>
                </div>
                <div className='hatuk'>
                    <div className="informAit">
                        <div className="krknutyun divs">
                            <div className="imgTiv">
                                <img src='https://aitschool.am/images/number1.svg' />
                            </div>
                            <div className="krknutyunInform">
                                <h2>Կրթություն</h2>
                                <p>Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր <br /> ծրագրավորման հիմնարար գիտելիքներ: Ինչպես<br /> նաև կարող եք ուսանել Graphic Design, UI/UX <br /> Design, SMM և Անգլերեն</p>
                            </div>
                        </div>
                        <div className="praktika divs">
                            <div className="imgTiv">
                                <img className='nkarPraktika' src='https://aitschool.am/images/number2.svg' />
                            </div>
                            <div className="krknutyunInform">
                                <h2>Պրակտիկա</h2>
                                <p>Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող ծրագրավորման ընկերությունում։ Կիրառի՛ր գիտելիքներդ՝ աշխատելով իրական նախագծերի վրա։</p>
                            </div>
                        </div>
                        <div className="gorc divs">
                            <div className="imgTiv">
                                <img src='https://aitschool.am/images/number3.svg' />
                            </div>
                            <div className="krknutyunInform">
                                <h2>Աշխատանք</h2>
                                <p>Ստացի՛ր մեր թիմին միանալու հնարավորություն։ Մեր ուսանողները կազմում են մեր թիմի 80%ը։</p>
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