import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { MainPortfolio } from '../MainPortfolio';
import { motion } from 'framer-motion';


export const Graphics = () => {
    const { AppName, setTitle } = useContext(AppContext);
    setTitle(`${AppName}Graphics Designing`);

    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
            <div className="graphic-design image-banner sec">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="h-100 col-sm-6 d-flex flex-column align-items-start justify-content-center">
                            <h1 className='text-white text-start'>An Energy That Builds  Memorable Brands</h1>
                            <Link to={'/contact'} className="btn btn-dark">
                                GET A QUOTE
                            </Link>
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
                        <div className="col-12 my-md-5 my-4">
                            <MainPortfolio />
                        </div>
                        {/* <div className="col-12 text-center my-md-5">
                            <button className="btn btn-main">See More</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
