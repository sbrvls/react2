import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './assets/components/header/header'
import Banner from './assets/components/banner/banner'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Banner></Banner>
  </React.StrictMode>
)
