import React, { useState } from 'react';
import Bars from '../../assets/bars.png';
import Logo2 from '../../assets/logo2.png'; // ✅ ADD YOUR LOGO
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false);

  return (

    <div className="header">

      {/* ✅ LOGO */}
      <div className="logo-container">
        <img src={Logo2} alt="Club Zeno Logo" className="logo-img" />
      </div>

      {menuOpened === false && mobile === true ? (

        <div
          className="menu-icon"
          onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="" />
        </div>

      ) : (

        <ul className="header-menu">

          <li>
            <Link
              to='home'
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to='services'
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to='reasons'
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Why us
            </Link>
          </li>

          <li>
            <Link
              to='plans'
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>
          </li>

          <li>
            <Link
              to='testimonials'
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
            >
              Testimonials
            </Link>
          </li>

          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              onClick={() => setMenuOpened(false)}
              className="join-now-btn"
            >
              Join Now
            </Link>
          </li>

        </ul>
      )}

    </div>
  );
};

export default Header;