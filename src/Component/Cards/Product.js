import React from 'react';
import Cards from './Cards';

const Product = () => {
    return (

      <div className="container">
         <div className="row grid-3">
           
                  <Cards 
                  title= "MyAgency"
                  images= "../images/2.JPG"
                  newPrice= "&#36;59.00  &ndash; &#36;199.00"
                  text= "Photography WordPress Theme" />

                  <Cards
                  title= "BenchMark"
                  images="../images/5.JPG"
                  newPrice= "&#36;159.00 &ndash; &#36;199.00"
                  text="Photography WordPress Theme" />
        
                  <Cards 
                  title = "Avtorai"
                  images="../images/8.JPG"
                  newPrice= "$40.00"
                  text="Photography WordPress Theme" />

              
                  <Cards
                  title="AppSo"
                  images="../images/3.JPG"
                  newPrice="&#36;39.00"
                  text="Photography WordPress Theme" />
                  
                  <Cards 
                  title=  "Instive"
                  images="../images/6.JPG"
                  newPrice="$39.00"
                  text="Photography WordPress Theme"/>

                 <Cards 
                  title= "Birdily"
                  images="../images/9.JPG"
                  newPrice= "$20.00"
                  oldPrice="$40.00"
                  text="Photography WordPress Theme"/>
         
                <Cards
                 title= "Munio"
                 images="../images/4.JPG"
                 newPrice=" &#36;19.00"
                 oldPrice="&#36;49.00"
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
         </div>

    );
}

export default Product;
