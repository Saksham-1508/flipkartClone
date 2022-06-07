import React from 'react'
import { StarOutlined } from '@ant-design/icons';
const ItemCard = ({product}) => {
  return (
    <div className="item-card">
        <div className="item-img">
            <img src = {product.url} alt="" />
        </div>
        <div className="item-details">
            <div className="item-desc">
                <p>
                    {product.title.longTitle}
                </p>
            </div>
            <div className="item-tag">
                <span style={{fontWeight:'lighter',fontSize:'12px',}}>{product.title.shortTitle}</span>
            </div>
            <div className="item-rating">
                <span className='item-stars'>{product.stars}<StarOutlined/></span>
                <span className='item-reviews'>(11,345)</span>
                <div className='assured-img'>
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
                </div>
            </div>
            <div className="item-pricing">
                <span className='current-price'> &#8377;{product.price.cost} </span>
                <span className='og-price'> &#8377;{product.price.mrp}</span>
                <span className='discount'>{product.price.discount} off</span>
            </div>
        </div>
    </div>
  )
}

export default ItemCard