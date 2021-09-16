import React, {useState} from 'react'
import { Data } from './Data'
import './ClientFeedback.css'


const ClientFeedback = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;


     const nextSlide = () => {
         setCurrent(current === length - 1 ? 0 : current + 1);
     };

     const prevSlide = () => {
         setCurrent(current === 0 ? length - 1 : current - 1);
     };

    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    return (
        <div className="container">
            <div className="slider">
  
            
            {Data.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && ( 
                  
                    <div className="row">
                    <div className="col-sm-12 col-lg-5 mt-5" >
                       <img className="circle" src={slide.images} alt="client-images" />
                    </div>
                    <div className="col2 col-sm-0 col-lg-7 mt-5">
                         <i className="quote fas fa-quote-left"></i>
                         <p>{slide.text}</p> 
                         <div class="d-flex justify-content-between">
                            <div class="client-info">
                            <h4>{slide.name}</h4>
                            <span>{slide.job}</span>
                            </div>
                           
                            <span className="mt-5">   
                            <i style={{color:"gold"}} className="fas fa-star"></i>
                            <i style={{color:"gold"}} className="fas fa-star px-1"></i>
                            <i style={{color:"gold"}} className="fas fa-star "></i>
                            <i style={{color:"gold"}} className="fas fa-star px-1"></i>
                            <i style={{color:"gold"}} className="fas fa-star"></i> 
                            </span>
                         </div>
                         <div className="mt-3">
                         <button onClick={prevSlide} className="btn-arrow px-3 py-2"><i className="fas fa-long-arrow-alt-left"></i></button>
                         <button onClick={nextSlide} className="btn-arrow px-3 py-2"><i className="fas fa-long-arrow-alt-right" ></i></button> 
                         </div>
                    </div>
                  </div>
                    
                    )}
                
                 </div>
               )
            })}
            </div>
        
        </div>
        
    )
}

export default ClientFeedback
