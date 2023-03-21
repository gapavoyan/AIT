import React from 'react'
import "./header.css"
function Header() {
    return (
        <div>
            <header>
                <div className='imgDiv'>
                    <img src='https://aitschool.am/images/Ait-Logo.svg' />
                </div>
                <div className='navDiv'>
                    <nav>
                        <ul className='navList'>
                            <li>Գլխավոր</li>
                            <li>Դասընթացներ</li>
                            <li>Գրանցում</li>
                            <li>Մեր մասին</li>
                            <li>Բլոգ</li>
                            <li>Կապ</li>
                        </ul>

                    </nav>
                </div>
                <div>
                <select>
                    <option>Հայերեն</option>
                    <option>English</option>
                    <option>Русский</option>
                </select>
                </div>
                
            </header>
        </div>
    )
}

export default Header