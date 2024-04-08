import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from  '../../assets/Product_list_icon.svg'


const Sidebar = () => {
    return (
        <div className= 'sidebar'>
            <Link to= {'/addproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={add_product_icon} alt=""/>
                    <p>Add Product</>
                </div>
            </Link> 
            <Link to= {'/listprodcut'} style={{textDecoration:"none"}}>
                <div className="sidebar-item">
                    <img src={list_product_icon} alt=""/>
                    <p>Product List</>
                </div>
            </Link>
        </div>
)



}
export default Sidebar
6:11:07 - 6:11:47
6:12:35 - 6:16:07
