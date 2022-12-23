
import { useState } from 'react';
import Filter from '../Components/Filter';
import FilteredItems from '../Components/FilteredItems';
import PortfolioItems from "./Portfolio.json";

export const MainPortfolio = () => {

    const [filtered, setFiltered] = useState(PortfolioItems);
    const [activeFilter, setActiveFilter] = useState("all");

    return (
        <>
            <Filter
                all={PortfolioItems}
                setFiltered={setFiltered}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            <div className="row">
                {/* <AnimatePresence> */}
                {filtered.map(items => (
                    <div className="col-lg-4 my-2 col-md-4 col-sm-6 col-12">
                        <FilteredItems
                            key={items.id}
                            item={items}
                        />
                    </div>
                ))}
                {/* </AnimatePresence> */}
            </div>
        </>
    )
}
