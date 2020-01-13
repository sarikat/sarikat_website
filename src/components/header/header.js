import React from 'react';
import {
    Link
  } from 'react-router-dom';

class Header extends React.Component {
    render () {
        return (
            <header>
                <div className='logo'>
                    SARIKA TYAGI
                </div>
                <nav>
                    <ul>
                        <li className='first'>
                            <Link to="/">Home</Link>

                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className='last'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
          );
    }
}


export default Header;
