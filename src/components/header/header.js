import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header>
                <div className='logo'>
                    Sarika's site
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Projects</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
          );
    }
}


export default Header;
