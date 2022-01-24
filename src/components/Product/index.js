import React from 'react';
import ImagemPrincipal from '../../assets/images/image-product-1.jpg'
import Imagem1 from '../../assets/images/image-product-1-thumbnail.jpg'
import Imagem2 from '../../assets/images/image-product-2-thumbnail.jpg'
import Imagem3 from '../../assets/images/image-product-3-thumbnail.jpg'
import Imagem4 from '../../assets/images/image-product-4-thumbnail.jpg'
import {ReactComponent as Menos} from '../../assets/images/icon-minus.svg'
import {ReactComponent as Mais} from '../../assets/images/icon-plus.svg'
import { ReactComponent as Carrinho } from '../../assets/images/carrinho-branco.svg'
import './css/style.css'

function Product() {
    return (
        <div className='container'>
            <div className='imagens'>
                <img src={ImagemPrincipal} className='imagem-principal' />
                <div className='scroll-imagens'>
                    <img src={Imagem1} className='thumbnail' />
                    <img src={Imagem2} className='thumbnail' />
                    <img src={Imagem3} className='thumbnail' />
                    <img src={Imagem4} className='thumbnail' />
                </div>
            </div>
            <div className='infopay'>
                <p className='tipo-produto'>sneaker company</p>
                <p className='titulo-produto'>fall limited edition senakers</p>
                <p className='descricao-produto'>These low-profile sneakers are your prefect casual wear companion. Featuring a dureble rebber outer sole, they'll withstand everthing the weather can offer.</p>
                <div className='preco-produtos'>
                    <p className='valor'>$125.00</p>
                    <p className='desconto'>50%</p> 
                </div>
                <p className='valor-antes'>$250.00</p>
                <div className='buttons'>
                    <div className='quantidade-produtos'>
                        <Menos /> 
                        <p className='quantidade'>1</p>
                        <Mais />
                    </div>
                    <div className='adiciona-carrinho'>
                        <Carrinho className='carrinho'/>
                        <p className='conteudo-adiciona'>Add to cart</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product;