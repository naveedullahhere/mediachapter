import React from 'react';
import { PortfolioMain } from '../PortfolioMain';


export const Graphics = () => {

    return (
        <>
            <div className="graphic-design image-banner sec">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="h-100 col-sm-6 d-flex flex-column align-items-start justify-content-center">
                            <h1 className='text-white text-start'>An Energy That Builds  Memorable Brands</h1>
                            <button className="btn btn-dark">
                                GET A QUOTE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">
                                Graphic Design
                            </h1>
                            <p className="para-sm text-muted my-3">
                                Our graphic design services help clients meet their goals and generate
                                desired results. Have a look at some of our most prestigious work.
                            </p>
                        </div>
                        <div className="col-12 my-5">
                            <PortfolioMain />
                        </div>
                        <div className="col-12 text-center my-5  ">
                            <button className="btn btn-main">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
