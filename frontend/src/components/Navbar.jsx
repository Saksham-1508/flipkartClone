import React from 'react'
import { Menu, Dropdown, Space, Button, Input } from 'antd';
import { DownOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const onSearch = (value) => console.log(value);
const suffix = (
    <SearchOutlined
        style={{
            fontSize: 16,
            color: '#047BD5',
            cursor: 'pointer',
            borderRadius: '5px',
        }}
    />
);
const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: 'Download App',
            },
        ]}
    />
);

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <Space>
                <div className="flip-logo">
                    <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flip-logo" />
                    <span><i>Explore<p style={{color:'#F8E831'}}>Plus</p></i> <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="flip-plus-logo" /></span>
                </div>

                <Input placeholder="Search for products, brands and more" suffix={suffix} size="large" onSearch={onSearch}
                    style={{ width: '480px', margin: '0 0.5em', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)', borderRadius: '3px' }} />

                <Button style={{ color: '#047BD5', fontSize: '16px', width: '124px', height: '2.4em' }}>Login</Button>
                <a href="#" rel=""><span id="become-seller">Become A Seller</span></a>
                <Dropdown overlay={menu}>
                    <a id="drop-down" onClick={(e) => e.preventDefault()}>
                        <Space>
                            More
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                <ShoppingCartOutlined style={{fontSize:24, color:'white',marginLeft:'1em',cursor:'pointer'}}/><span id="cart-logo">Cart</span>
            </Space>
        </div >
        <div className="categories">
                <ul>
                <span className='category-item'><li>Electronics</li><DownOutlined style={{fontSize:10}}/></span>
                    <span className='category-item'><li>TVs and Appliances</li><DownOutlined style={{fontSize:10}}/></span>
                    <span className='category-item'><li>Men</li><DownOutlined style={{fontSize:10}}/></span>
                    <span className='category-item'><li>Women</li><DownOutlined style={{fontSize:10}}/></span>
                    <span className='category-item'><li>Babies and Kids</li><DownOutlined style={{fontSize:10}}/></span>
                    <span className='category-item'><li>Home and Furniture</li><DownOutlined style={{fontSize:10}}/></span>
                    <span className='category-item'><li>Sports,Books and More</li><DownOutlined style={{fontSize:10}}/></span>
                    <li>Flights</li>
                    <li>Offer Zone</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar