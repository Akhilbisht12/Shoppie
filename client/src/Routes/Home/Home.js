import React from 'react';
import Header from '../../Components/Header/Header';
import logo from './main.png';
import Product from '../../Components/Product/Product';
export default function Home() {

    return (
        <div>
            <Header/>
            <img style={{width : '100%'}} src={logo}/>
            <div style={{display : 'flex', flexWrap : 'wrap', alignItems : 'center', justifyContent : 'center'}}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
        
    )
}
