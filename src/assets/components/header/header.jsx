import './header.css'

export default function Header(){
    return(
        <div className="header">
            <div className="container">
              
                    <div className="header-comp">
                        
                        <div className="header-menu">
                            <img src="/header/logo.png" alt=''/>
                            <div className="header-nav">
                                <a href="#" className="header-link">Главная</a> |
                                <a href="#" className="header-link">Каталог</a> |
                                <a href="https://github.com/sbrvls/react2.git" className="header-link">GitHub</a> |
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