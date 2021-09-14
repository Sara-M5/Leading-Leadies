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
                  
                    <div className="d-flex justify-content-between">
                    <div className="col1" >
                       <img className="circle" src={slide.images} alt="client-images" />
                    </div>
                    <div className="col2">
                         {slide.text}   
                         <h3>{slide.name}</h3>
                         {slide.job}
                         <div className="mt-3">
                         <button onClick={prevSlide} className="p-4"><i className="fas fa-arrow-circle-left"></i></button>
                         <button onClick={nextSlide} className="p-4"><i className="fas fa-arrow-circle-right" ></i></button> 
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
