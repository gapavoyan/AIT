import React from 'react'
import "./footer.css"
function Footer() {
    return (
        <div>
            <footer>
                <div className="footerDiv">
                    <div className='verevFooter'>
                        <div className='hamar'>
                            <i class="fa-solid fa-phone icon"></i>
                            <span>+374(93)-67-69-66</span>
                        </div>
                        <div className='mail'>
                            <i class="fa-solid fa-envelope icon"></i>
                            <span>info@aitschool.am</span>
                        </div>
                        <div className='instagram'>
                            <i class="fa-brands fa-instagram icon"></i>
                            <span>ararat_itcenter</span>
                        </div>
                    </div>
                    <div className='nerqevFooter'>
                        <div className='facebook'>
                            <i class="fa-brands fa-facebook icon"></i>
                            <span>Ararat IT Center</span>
                        </div>
                        <div className='linkedin'>
                            <i class="fa-brands fa-linkedin icon"></i>
                            <span>Ararat IT Center</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer