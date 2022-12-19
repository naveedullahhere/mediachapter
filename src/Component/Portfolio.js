 
import React from 'react';
import { MainPortfolio } from './MainPortfolio';



export const Portfolio = () => {

    return (
        <>
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
                            <MainPortfolio />
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