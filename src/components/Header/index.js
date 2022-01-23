import React from 'react';
import {ReactComponent as Carrinho} from '../../assets/images/icon-cart.svg'

function header() {
    return (
        <header>
            <div className='menu'>
                <ul>
                    <li>collections</li>
                    <li>men</li>
                    <li>women</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
                <div className='menu-commerce'>
                    <Carrinho />
                    <img src="./image-avatar.png" />
                </div>
            </div>
        </header>
    )
}

export default header;