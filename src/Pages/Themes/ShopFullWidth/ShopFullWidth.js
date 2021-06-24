import React from 'react';
import Product from '../../../Component/Cards/Product';
import Header from '../../../Parts/Header';
import LastPart from '../../../Parts/LastPart/LastPart';

import './ShopFullWidth.css';

const ShopFullWidth = () => {
return (
    <div>
        
        <Header 
       title="Product"
       subTitle="Product"
       
       />
        <div className="container">
<div className="filter-area">
<div className="row pt-4">
<div className="col-md-9 col-sm-6 my-auto">
<p className="result-count ">
Showing 1&ndash;9 of 40 results</p>
</div>
<div className="col-md-3 col-sm-6 my-auto">

<div class="dropdown ordering">
            <ul  className="dropdown-toggle result-count py-3 px-5 " data-toggle="dropdown">
                Default sorting    <span className="sr-only"> </span>   
            </ul>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Default sorting</a>
                <a class="dropdown-item" href="#">Sort by popularity</a>
                <a class="dropdown-item" href="#">Sort by average rating</a>
                <a class="dropdown-item" href="#">Sort by latest</a>
                <a class="dropdown-item" href="#">Sort by price: low to high</a>
                <a class="dropdown-item" href="#">Sort by price: high to low</a>
            </div>
        </div>
    
</div>
</div>
</div>
</div>

    
    <Product />
   <div className="row">
   
            <ul className="pagination justify-content-center my-5">
                <span className="sr-only"></span>
                <li className="page-item">
                    <a className="page-link first active" href="#">1</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                    <span className="page-link">...</span>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">Next &#10095;</a>
                </li>
                    <span className="sr-only"></span>
                
             
            </ul>
 
        </div> 
  
    <LastPart />
    </div>
);


}

export default ShopFullWidth;