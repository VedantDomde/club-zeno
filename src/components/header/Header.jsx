import React, { useState } from 'react'
import Bars from '../../assets/bars.png'
import Logo2 from '../../assets/logo2.png'
import { Link } from 'react-scroll'
import './Header.css'

const Header = () => {

  const mobile = window.innerWidth <= 768
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="header">

      <div className="logo-container">
        <img src={Logo2} alt="logo" className="logo-img" />
      </div>

      {mobile && !menuOpened ? (

        <div
          className="menu-icon"
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="" />
        </div>

      ) : (

        <>
          <ul className="header-menu">

            <li>
              <Link to='home' smooth duration={500} onClick={() => mobile && setMenuOpened(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to='services' smooth duration={500} onClick={() => mobile && setMenuOpened(false)}>
                Services
              </Link>
            </li>

            <li>
              <Link to='reasons' smooth duration={500} onClick={() => mobile && setMenuOpened(false)}>
                Why Us
              </Link>
            </li>

            <li>
              <Link to='plans' smooth duration={500} onClick={() => mobile && setMenuOpened(false)}>
                Plans
              </Link>
            </li>

            <li>
              <Link to='testimonials' smooth duration={500} onClick={() => mobile && setMenuOpened(false)}>
                Reviews
              </Link>
            </li>

            <li>
              <Link
                to='join-us'
                smooth
                duration={500}
                className="join-now-btn"
                onClick={() => mobile && setMenuOpened(false)}
              >
                Join Now
              </Link>
            </li>

          </ul>

          {mobile && (
            <div className="close-icon" onClick={() => setMenuOpened(false)}>
              ✕
            </div>
          )}
        </>
      )}

    </div>
  )
}

export default Header