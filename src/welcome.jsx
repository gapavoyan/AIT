import React from 'react'
import "./welcome.css"
function Welcome() {
    return (
        <div>
            <div className='content'>
                <div className='welcome'>
                    <div className="text-content">
                        <h1 className='ararat'>Ararat</h1>
                        <h3 className='itSchool'>IT School</h3>
                        <p className='discover'>Բացահայտիր IT անսահման հնարավորությունները</p>
                        <button className='button'>Դասընթացներ</button>
                    </div>
                </div>
                <div className="imgWelcome">
                    <div className='imageDiv'>
                        <img src='https://aitschool.am/images/main_image.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome