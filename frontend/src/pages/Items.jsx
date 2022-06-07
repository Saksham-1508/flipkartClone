import React, { useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import Sidebar from '../components/Sidebar'
import { SortBar } from '../components/SortBar'
import Axios from 'axios';
import { Pagination } from 'antd';

const Items = () => {
  const [products,setProducts] = useState([])
  const [brands, setbrands] = useState([])
  
  const getAllProducts = async () =>{
      const response = await Axios.get('http://localhost:3001/getProducts');
      setProducts(response.data);
      const all_brands = new Set();
      for (let index = 0; index < response.data.length; index++) {
          all_brands.add(response.data[index].brand);
      }  
      const temp = [...all_brands];
      setbrands(temp);
    }

  useEffect(() => {
    getAllProducts();
  }, [])
  
  function GetSortOrder(type,prop) {    
    return function(a, b) {  
      if(type === "price"){
        if (a['price'][prop] > b['price'][prop]) {    
            return 1;    
        } else if (a['price'][prop] < b['price'][prop]) {    
            return -1;    
        }    
        return 0;    
      }
      else if(type === "popularity"){
        if (a[prop] > b[prop]) {    
          return 1;    
      } else if (a[prop] < b[prop]) {    
          return -1;    
      }    
      return 0;
      }  
    }    
  }    
  const sortProducts = (type) =>{
    if(type === "inc"){
      setProducts([...products.sort(GetSortOrder("price","cost"))]);
      console.log(products);
    }
    else if(type === "dec"){
      setProducts([...products.sort(GetSortOrder("price","cost")).reverse()]);
      console.log(products);
    }
    else if(type === "discount"){
      setProducts([...products.sort(GetSortOrder("price","discount")).reverse()]);
      console.log(products);
    }
    else if(type === "popularity"){
      setProducts([...products.sort(GetSortOrder("popularity","stars")).reverse()]);
      console.log(products);
    }
  }
  
  return (
    <div className='items-page'>
      <div className='side-bar-container'>
        <Sidebar brands={brands}/>
      </div>
      <div className="container">
        <SortBar sortProducts={sortProducts} getAllProducts={getAllProducts}/>
        <div className='items-container'>
          {products.map((element)=>{
            return(
              <ItemCard key={element._id}product={element}/>
            );
          })}
        </div>
        <div style={{display:'flex',flexDriection:'row',justifyContent:'center'
        ,width:'100%',margin:'2em' }}>
        <Pagination defaultCurrent={1}  defaultPageSize={5} total={50} />
        </div> 
      </div>
    </div>
  )
}

export default Items