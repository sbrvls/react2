import './banner.css'
import {Link} from 'react-router-dom'


export default function Banner(){
    return(
        <div className="banner">
            
            <div className="container">
                <div className="banner-content">
                    <div className="df">
                        <img src="/banner/logo-banner.png" alt=''/> 
                        <div className="banner-text">Бренд одежды</div>
                        <Link to="#" className="btn-banner">Перейти в категории</Link>
                    </div>
               
                </div>
            </div>
        </div>
    )
}