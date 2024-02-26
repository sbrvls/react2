import Header from './components/header/Header'
import Banner from './pages/banner/Banner'
import Catalog from './pages/catalog/Catalog'
import {Routes, Route} from 'react-router-dom'

function App(){
    return(
        <>
            <Header/>
            <Routes>
                <Route path="/banner" element={<Banner/>}></Route>
                <Route path="/catalog" element={<Catalog/>}></Route>
            </Routes>
        </>
    )
}