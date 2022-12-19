 
import React from 'react';
import { motion } from 'framer-motion';
import { MainPortfolio } from './MainPortfolio';



export const Portfolio = () => {

    return (
        <>
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
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
            </motion.div>
        </>
    )
}