import './header.css'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <div className="header">
            <div className="container">
              
                    <div className="header-comp">
                        
                        <div className="header-menu">
                            <img src="/header/logo.png" alt=''/>
                            <div className="header-nav">
                                <Link to="/" className="header-link">Главная</Link> |
                                <Link to="/catalog" className="header-link">Каталог</Link> |
                                <Link to="https://github.com/sbrvls/react3.git" className="header-link">GitHub</Link> |
                            </div>
                        </div>

                        <div className="header-menu1">
                            <img src="/header/search.png" />
                            <img src="/header/elem.png" />
                            <img src="/header/like.png" />
                            
                        </div>
                    </div>
                
            </div>
        </div>
    )
}