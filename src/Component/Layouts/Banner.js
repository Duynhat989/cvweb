import Img from '../Forms/Img'
import { useEffect } from 'react';

function Banner({src,alt,slogen}){
   
     return (
         
        <div className="banner show" id = 'banner'>
            <div className='banner-content'>
                <div className='title' >
                    <h1>Châm ngôn sống</h1>
                    <p> <em>{slogen}</em></p>
                </div>
            </div>
            <div className='banner-img'>
                <Img src={src} 
                alt={alt}
                />
            </div>
        </div>
    )
}
export default Banner