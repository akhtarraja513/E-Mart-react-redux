import React from 'react'
import Products from './Products'
import bg from './assets/bg.jpg';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src={bg} className="card-img" alt="backgrond" height={550} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="cntainer ms-4">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text">CHECKOUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home