import React from 'react';
import { ReactComponent as Carrinho } from '../../assets/images/icon-cart.svg'
import Usuario from '../../assets/images/image-avatar.png'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import './css/style.css'
import OpenCarrinho from './carrinho';

function header() {
    return (
        <header>
            <div className='header'>
                <div className='conteudo-header'>
                    <Logo className='logo' />
                    <ul className='conteudo-ul'>
                        <li className='conteudo-li'>collections</li>
                        <li className='conteudo-li'>men</li>
                        <li className='conteudo-li'>women</li>
                        <li className='conteudo-li'>about</li>
                        <li className='conteudo-li'>contact</li>
                    </ul>
                </div>
                <div className='menu-commerce'>
                    <Carrinho className='carrinho' Onclick={() => {console.log('Not a Number')}}/>
                    <img src={Usuario} className='Usuario' />
                </div>
            </div>
        </header>
    )
}

export default header;