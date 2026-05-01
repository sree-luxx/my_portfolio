import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT ME', to: '/about' },
    { label: 'SKILLS', to: '/skills' },
    { label: 'RESUME', to: '/resume' },
    { label: 'CERTIFICATIONS', to: '/certification' },
    { label: 'CONTACT', to: '/contact' }
];

const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const closeMobileMenu = () => {
        setToggleIcon(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__container__logo">
                    <FaReact size={30} />
                </Link>

                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar__container__menu__item">
                            <Link className="navbar__container__menu__item__links" to={item.to} onClick={closeMobileMenu}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
