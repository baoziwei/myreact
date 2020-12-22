import React, { PureComponent } from 'react';

const Navber = () =>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className='container'>
                <a href="/" className='brand-logo'>我是标题</a>
                <ul className='right'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/content">content</a>
                </ul>
            </div>
        </nav>
    );
}

export default Navber