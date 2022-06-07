import React from 'react'
import { DownOutlined, StarOutlined } from '@ant-design/icons';

const Sidebar = ({brands}) => {

    return (
        <div className="side-bar">
            
            <div className="filter">
                Filter
                <hr />
            </div>

            <div className="filter-categories">
                Categories 
                <span><DownOutlined/><strong>Gaming</strong></span>
                <div className="sub-categories">
                    <span>Gaming Consoles</span>
                    <span>Gaming Laptops</span>
                    <span>Games</span>
                    <span>Gaming Accessories</span>
                    <span>Membership Cards</span>
                    <span style={{color:'#047BD5'}}>Show 1 More</span>
                </div>
            </div>

            <div>
                <hr />
            </div>

            <div className="fk-assured">
                <input type="checkbox" id="fk-assured"/>
                <label style={{marginLeft:'0.5em'}} htmlFor="fk-assured">
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" style={{width:'80px'}} alt="" />
                </label>
            </div>

            <div>
                <hr />
            </div>

            <div className="brands check-filter">
                <div className="filter-heading">
                    <strong>BRANDS</strong>
                    <DownOutlined/>
                </div>
                <div className="filter-options">
                    {brands.map((brand)=>{
                        return(
                            <span className='filter-option'>
                                <input type="checkbox" id={brand} name={brand}/>
                                <label style={{marginLeft:'3px'}} htmlFor={brand}>{brand}</label>
                            </span>
                        );
                    })}
                    
                </div>
            </div>

            <div>
                <hr />
            </div>

            <div className="customer-ratings check-filter">
                <div className="filter-heading">
                        <strong>CUSTOMER RATINGS</strong>
                        <DownOutlined/>
                </div>
                <div className="filter-options">
                    <span className='filter-option'>
                        <input type="radio" id="STAR-4" name="STAR"/>
                        <label style={{marginLeft:'3px'}} value="4" htmlFor="STAR-4">4 <StarOutlined /> and above</label>
                    </span>
                    <span className='filter-option'>
                        <input type="radio" id="STAR-3" name="STAR"/>
                        <label style={{marginLeft:'3px'}} value="3" htmlFor="STAR-3">3 <StarOutlined /> and above</label>
                    </span>
                    <span className='filter-option'>
                        <input type="radio" id="STAR-2" name="STAR"/>
                        <label style={{marginLeft:'3px'}} value="2" htmlFor="STAR-2">2 <StarOutlined /> and above</label>
                    </span>
                    <span className='filter-option'>
                        <input type="radio" id="STAR-1" value="1" name="STAR"/>
                        <label style={{marginLeft:'3px'}} htmlFor="STAR-1">1 <StarOutlined /> and above</label>
                    </span>
                    
                </div>
            </div>

            <div>
                <hr />
            </div>

            <div className="offers check-filter">
                <div className="filter-heading">
                    <strong>OFFERS</strong>
                    <DownOutlined/>
                </div>
                <div className="filter-options">
                    <span className='filter-option'>
                        <input type="checkbox" id="buy-more" name="buy-more"/>
                        <label style={{marginLeft:'3px'}} htmlFor="buy-more">Buy More, Save More</label>
                    </span>
                    <span className='filter-option'>
                        <input type="checkbox" id="noc-emi" name="noc-emi"/>
                        <label style={{marginLeft:'3px'}} htmlFor="noc-emi">No Cost EMI</label>
                    </span>
                    <span className='filter-option'>
                        <input type="checkbox" id="special-price" name="special-price"/>
                        <label style={{marginLeft:'3px'}} htmlFor="special-price">Special Price</label>
                    </span>
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar;