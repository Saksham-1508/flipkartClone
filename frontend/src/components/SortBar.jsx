import React from 'react'
import { Breadcrumb, Menu } from 'antd';

export const SortBar = () => {
    return (
        <div className='sort-bar'>
            <Breadcrumb separator=">" >
                <Breadcrumb.Item className='bread-crumb'>Home</Breadcrumb.Item>
                <Breadcrumb.Item className='bread-crumb'>Gaming</Breadcrumb.Item>
            </Breadcrumb>
            <p className='results'><strong>Showing 1 - 40 of 123 results for "gaming"</strong></p>
            <div className="sort-by-tab">
                <p style={{width:'60px',marginBottom:0}}><strong>Sort By</strong></p>
                <Menu mode="horizontal" defaultSelectedKeys={['relevance']} style={{width:'100%',justifyContent:'left'}}>
                    <Menu.Item style={{margin:0}} key="relevance">
                        Relevance
                    </Menu.Item>
                    <Menu.Item style={{margin:0}} key="popularity">
                        Popularity
                    </Menu.Item>
                    <Menu.Item style={{margin:0}} key="htl">
                        Price -- High to Low
                    </Menu.Item>
                    <Menu.Item style={{margin:0}} key="lth">
                        Price -- Low to High
                    </Menu.Item>
                    <Menu.Item style={{margin:0}} key="newest">
                        Newest First
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}
