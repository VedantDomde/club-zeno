import React from 'react'
import './Footer.css'
import Instagram from '../../assets/instagram.png';
import Logo from '../../assets/CLUB ZENO LOGO (1).png';

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
            <div className="social-links">
                {/* Instagram Link */}
                <a href="https://www.instagram.com/clubzeno/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram"/>
                </a>
                
                {/* WhatsApp Link */}
                <a href="https://wa.me/919699237168?text=Hi%20Club%20Zeno" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp"/>
                </a>
            </div>
            <div className="whatsapp-number">
                <a href="https://wa.me/919699237168?text=Hi%20Club%20Zeno" target="_blank" rel="noopener noreferrer">
                    📞 9699237168
                </a>
            </div>
            <div className="logo-f">
                <img src={Logo} alt="Logo"/>
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer