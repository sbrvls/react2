import './catalog.css'
import {Link} from 'react-router-dom'


export default function Catalog(){
    return(
        <div className="catalog">
            <div className="container">
                <div className="catalog-content">
                    <div className="catalog-card">
                        <img src="/catalog/1.png" alt="" className="catalog-img" />
                        <div className="card-item">
                            <div className="card-name">Рубашка СВЭГ</div>
                            <div className="card-bottom">
                                <div className="card-price">9999 ₽</div>
                                <div className="card-btns">
                                    <img src="/header/like.png" alt="" className="like" />
                                    <img src="/header/elem.png" alt="" className="elem" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="catalog-card">
                        <img src="/catalog/2.png" alt="" className="catalog-img" />
                        <div className="card-item">
                            <div className="card-name">Рубашка СВЭГ</div>
                            <div className="card-bottom">
                                <div className="card-price">9999 ₽</div>
                                <div className="card-btns">
                                    <img src="/header/like.png" alt="" className="like" />
                                    <img src="/header/elem.png" alt="" className="elem" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="catalog-card">
                        <img src="/catalog/3.png" alt="" className="catalog-img" />
                        <div className="card-item">
                            <div className="card-name">Рубашка СВЭГ</div>
                            <div className="card-bottom">
                                <div className="card-price">9999 ₽</div>
                                <div className="card-btns">
                                    <img src="/header/like.png" alt="" className="like" />
                                    <img src="/header/elem.png" alt="" className="elem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}