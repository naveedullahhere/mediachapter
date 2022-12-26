
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { MainPortfolio } from './MainPortfolio';
import { AppContext } from '../context/AppContext';



export const Portfolio = () => {
    const { APP_NAME, setTitle } = useContext(AppContext);
    setTitle(`${APP_NAME}Portfolio`);

    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">
                                Our Featured Work
                            </h1>
                        </div>
                        <div className="col-12 my-5">
                            <MainPortfolio />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}