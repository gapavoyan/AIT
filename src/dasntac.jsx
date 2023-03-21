import React from 'react'
import "./dasntac.css"
function Dasntac() {
    return (
        <div>
            <div className="container">
                <div className="dasntac">
                    <h2>Դասընթացներ</h2>
                </div>
                <div className="dasntacner">
                    <div className="web das">
                        <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/web_course.png' />
                            <h3>Web Development</h3>
                            <p>6 ամիս</p>
                        </div>
                    </div>
                    <div className="uiUx das">
                    <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/ui-ux.png' />
                            <h3>UI/UX</h3>
                            <p>2 ամիս</p>
                        </div>
                    </div>
                    <div className="smm das">
                    <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/smm.png' />
                            <h3>SMM</h3>
                            <p>1.5 ամիս</p>
                        </div>
                    </div>
                    <div className="graphicDizayn das">
                    <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/graphic-design.png' />
                            <h3>GRAPHIC DESIGN</h3>
                            <p>2 ամիս</p>
                        </div>
                    </div>
                    <div className="english das">
                    <div className='nkarWebi'>
                            <img style={{ width: "70%", height: "70%" }} src='https://api.aitschool.am/english.png' />
                            <h3>English</h3>
                            <p>2 ամիս</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dasntac