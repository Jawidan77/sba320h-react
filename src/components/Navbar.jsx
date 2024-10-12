// src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Carousel.css';

// const Navbar = () => {
//     return (
//         <nav>
//             <h1>Friendly Restaurant</h1>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/menu">Menu</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS for styling
import './Carousel.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">Logo</h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
