import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Filter from '../Components/Filter';
import FilteredItems from '../Components/FilteredItems';
import PortfolioItems from "./Portfolio.json";

export const MainPortfolio = () => {

    const [filtered, setFiltered] = useState(PortfolioItems);
    const [activeFilter, setActiveFilter] = useState("all");

    return (
        
        <div className="sec py-5">

            <div className="container">
                <Filter
                    all={PortfolioItems}
                    setFiltered={setFiltered}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
                <motion.div
                    layout
                >
                    <div className="row">

                        <AnimatePresence>
                            {filtered.map(items => (
                                <div className="col-lg-4 my-2 col-md-4 col-sm-6 col-6">
                                    <FilteredItems
                                        key={items.id}
                                        item={items}
                                    />
                                </div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
