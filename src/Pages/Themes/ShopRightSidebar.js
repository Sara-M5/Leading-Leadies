import React from 'react';
import Cards from '../../Component/Cards/Cards';
import LastPart from '../../Parts/LastPart/LastPart';
import Sidebar from '../../Component/Sidebar/Sidebar';


const ShopRightSidebar = () =>{
    return(
       <div > 
             
       <div className="breadcrumb-banner">
         <div className="container">
           <h1 className="text-white py-4">Products</h1> 
           <ol className="breadcrumb text-white">
           <li className="breadcrumb-item"><a className="link text-white" href="/Home">Home</a> </li>
           <li><span className="px-2"> &#10095;&#10095;</span></li>
           <li className="breadcrumb-item"><a className="link text-white" href="/ShopFullWidth">Shop</a> </li>
           <li><span className="px-2"> &#10095;&#10095;</span></li>
           <li className="active ">Products</li>
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
         Default sorting</ul>
        
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
              <div className="col-md-8 grid-3">
               
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
                  text="Photography WordPress Theme" />
             
              
              <Cards 
                  title= "Birdily"
                  images="../images/9.JPG"
                  newPrice= "$20.00"
                  oldPrice="$40.00"
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
                
          
           </div>

           <div className="col-md-4">
             <Sidebar />          
            </div>

              
            
            <nav className="container">
            <ul className="pagination justify-content-center my-5">
                <span className="sr-only"></span>
                <li className="page-item"><a className="page-link first active" href="#">1</a></li>
                <li className="page-item"> <a className="page-link mx-2" href="#">2</a></li>
                <li className="page-item"><a className="next page-link" href="#">Next &#10095;</a></li>
                <span className="sr-only"></span>
            </ul>
           </nav>

       </div>
          
        <LastPart />
         
           
      

      
     </div>
    
    );
}

export default ShopRightSidebar;
