import React from 'react';
import Cards from '../../Component/Cards/Cards';
import Product from '../../Component/Cards/Product';
import LastPart from '../../Parts/LastPart/LastPart';


const ShopRightSidebar = () =>{
    return(
         <div > 
       <div className="breadcrumb-banner">
       <div className="container">
           <h1 className="text-white py-4">Products</h1> 
           <ol class="breadcrumb text-white">
           <li class="breadcrumb-item"><a className="link text-white" href="/Home">Home</a> </li>
           <li><span className="px-2"> &#10095;&#10095;</span></li>
           <li class="breadcrumb-item"><a className="link text-white" href="/ShopFullWidth">Shop</a> </li>
           <li><span className="px-2"> &#10095;&#10095;</span></li>
           <li class="active ">Products</li>
           </ol>
           </div>
           </div>

        <div className="container">
        <div className="filter-area">
        <div className="row pt-4">
        <div className="col-md-9 col-sm-6 my-auto">
               <p className="result-count "> Showing 1&ndash;9 of 40 results</p>
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
          
          <div className="row">
              <div className="col-md-4 ">
               
              <Cards 
                  title= "MyAgency"
                  images= "../images/2.JPG"
                  newPrice= "&#36;59.00  &ndash; &#36;199.00"
                  text= "Photography WordPress Theme" />

                <Cards
                  title="AppSo"
                  images="../images/3.JPG"
                  newPrice="&#36;39.00"
                  text="Photography WordPress Theme" />
       
              <Cards
                  title= "BenchMark"
                  images="../images/5.JPG"
                  newPrice= "&#36;159.00 &ndash; &#36;199.00"
                  text="Photography WordPress Theme"
                  
               />
                   <Cards 
                  title = "Avtorai"
                  images="../images/8.JPG"
                  newPrice= "$40.00"
                  text="Photography WordPress Theme" />
               </div>
               <div className="col-md-4">
                  <Cards 
                  title=  "Instive"
                  images="../images/6.JPG"
                  newPrice="$39.00"
                  text="Photography WordPress Theme"/>
             
             <Cards 
                  title="Fourmusic"
                  images="../images/7.JPG"
                  newPrice="&#36;69.00"
                  text="Photography WordPress Theme" />
              

                <Cards 
                  title= "Daeron"
                  images="../images/10.JPG"
                  newPrice= "$59.00"
                  oldPrice="$79.00"
                  text="Photography WordPress Theme" />
                
                 <Cards 
                  title= "Birdily"
                  images="../images/9.JPG"
                  newPrice= "$20.00"
                  oldPrice="$40.00"
                  text="Photography WordPress Theme"/>
                </div>


              <div className="col-md-4">


             
           <div className="card mb-5">
                    <h3 className="card-title px-3">Product Categories</h3>
                    <div className="mx-3 text-danger line"> 
                    <hr />
                    </div>
                <div className="px-3">
                  
                   
                   <div className="d-flex justify-content-between">
                   <p className="card-text">CMS Themes </p>
                   <p>(7)</p>
                   </div><hr />
                   

                   <div className="d-flex justify-content-between">
                   <p className="card-text">eCommerce</p>
                   <p>(9)</p>
                   </div><hr />
                   

                   <div className="d-flex justify-content-between">
                   <p className="card-text">Joomla</p>
                   <p>(6)</p>
                   </div><hr />

                   <div className="d-flex justify-content-between">
                   <p className="card-text">PSD Templates</p>
                   <p>(5)</p>
                   </div><hr />


                   <div className="d-flex justify-content-between">
                   <p>Site Templates</p>
                   <p>(5)</p>
                   </div><hr />


                   <div className="line d-flex justify-content-between">
                   <p>WordPress</p>
                   <p>(8)</p>
                   </div>
                   
                   </div>
                   </div>

                    <div className="card mb-5">
                    <h3 className="card-title px-3">Average rating</h3>
                    <div className="mx-3 text-danger line"> 
                    <hr />
                    </div>
                <div className="px-3">
                  
                   
                   <div className="d-flex justify-content-between">
         
                   <p>(7)</p>
                   </div><hr />
                   

                   <div className="d-flex justify-content-between">
                 
                   <p>(9)</p>
                   </div><hr />
                   

                   <div className="d-flex justify-content-between">
                  
                   <p>(6)</p>
                   </div><hr />

                   <div className="d-flex justify-content-between">
                
                   <p>(5)</p>
                   </div><hr />


                   <div className="d-flex justify-content-between">
           
                   <p>(5)</p>
                   </div><hr />


                   <div className="line d-flex justify-content-between">

                   <p>(8)</p>
                   </div>
                   
                   </div>
                   </div>

           <div className="card-1 mb-5">
                   <h3 className="card-title px-3">Product Tags</h3>
                   <div className="mx-3 text-danger line"> 
                    <hr />
                    </div>
                       <button className="blog-btn px-3 py-1 m-1">business</button>
                       <button className="blog-btn px-3 py-1 m-1">Car Insurance</button>
                       <button className="blog-btn px-3 py-1 m-1">corporate website</button>
                       <button className="blog-btn px-3 py-1 m-1">finance</button>
                       <button className="blog-btn px-2 py-1 m-1">healt insurance</button>
                       <button className="blog-btn px-3 py-1 m-1">insurance</button>
                       <button className="blog-btn px-2 py-1 m-1">insurance agency</button>
                       <button className="blog-btn px-2 py-1 m-1">insurance company</button>
                       <button className="blog-btn px-3 py-1 m-1">insurance theme</button>
                       <button className="blog-btn px-3 py-1 m-1">life insurance</button>
                
                   </div>
           </div>
       </div>

           <nav className="container">
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
                <span className="page-link dots">&hellip;</span>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                   <a className="next page-link" href="#">Next &#10095;</a>
                </li>
                    <span className="sr-only"></span>
                
             
            </ul>
        </nav>

 

<div class="container  mt-5">
<nav className="navigation pagination justify-content-center align-self-center" role="navigation" aria-label="Posts">
<div className="nav-links"><span aria-current="page" className="page-link current">1</span>

<a className="page-link" href="#">3</a>

<a className="page-link" href="#">5</a>
</div>
</nav> </div>
          
        <LastPart />
         
           
      

      
     </div>
    
    );
}

export default ShopRightSidebar;