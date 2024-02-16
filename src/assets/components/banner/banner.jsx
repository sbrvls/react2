import './banner.css'


export default function Banner(){
    return(
        <div className="banner">
            
            <div className="container">
                <div className="banner-content">
                    <div className="df">
                        <img src="/banner/logo-banner.png" alt=''/> 
                        <div className="banner-text">Бренд одежды</div>
                        <a href="#" className="btn-banner">Перейти в категории</a>
                    </div>
               
                </div>
            </div>
        </div>
    )
}