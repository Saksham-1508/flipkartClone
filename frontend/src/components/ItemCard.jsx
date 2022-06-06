import React from 'react'
import { StarOutlined } from '@ant-design/icons';
const ItemCard = () => {
  return (
    <div className="item-card">
        <div className="item-img">
            <img src="https://rukminim1.flixcart.com/image/612/612/k0sgl8w0/gaming-accessory-kit/game-controller/k/u/z/buy-surety-1-pair-pubg-moible-controller-gamepad-trigger-l1-r1-original-imafkfjtv3xs3xxh.jpeg?q=70" alt="" />
        </div>
        <div className="item-details">
            <div className="item-desc">
                <p>
                BUY SURETY 1 Pair PUBG Moible Controller Gamepad Trigger L1 R1 Sensitive Shoot and Aim PUBG Mobile Triggers/Controller PUGB Mobile Game Pad Grip L1R1 Free Fire Joystick for pubg, Fortnite compatible with all smartphone Gaming Accessory Kit  (Black Red, For Android)
                </p>
            </div>
            <div className="item-tag">
                <span style={{fontWeight:'lighter',fontSize:'12px',}}>Black and red for Android</span>
            </div>
            <div className="item-rating">
                <span className='item-stars'>3.3<StarOutlined/></span>
                <span className='item-reviews'>(11,345)</span>
                <div className='assured-img'>
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
                </div>
            </div>
            <div className="item-pricing">
                <span className='current-price'> &#8377;199 </span>
                <span className='og-price'> &#8377;500</span>
                <span className='discount'>43% off</span>
            </div>
        </div>
    </div>
  )
}

export default ItemCard