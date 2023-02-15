
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Filter from '../Components/Filter';
import FilteredItems from '../Components/FilteredItems';
import { AppContext } from '../context/AppContext';
import PortfolioItems from "./Portfolio.json";

export const MainPortfolio = () => {

    const [filtered, setFiltered] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [fltr, setfltr] = useState([]);


    const [img, setImg] = useState(null);
    const { URL } = useContext(AppContext);

    useEffect(() => {
        fetch(`${URL}api/portfolio`)
            .then((response) => response.json())
            .then((actualData) => { setFiltered(actualData.data); setfltr(actualData.data); setImg(actualData.media_path) })
            .catch((err) => {
                setFiltered([]);
                toast.error("Something went wrong!");
            });
    }, []);


    console.log(fltr);


    let filteredItm = fltr.map((item) => {
        return item.category
    })


    var tempData = [];
    // console.log([...new Set(filteredItmFilter.flat())].length);
    for (var index = 0; index < [...new Set(filteredItm.flat())].length; index++) {
        var aa = { "link": `${[...new Set(filteredItm.flat())][index]}` };
        tempData.push(aa);
    }

    console.log(filteredItm);


    return (
        <>
            <Filter
                all={fltr}
                setFiltered={setFiltered}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                filtered={filtered}
                tempData={tempData}
            />

            <div className="row">
                {/* <AnimatePresence> */}
                {filtered.map(items => (
                    <div className="col-lg-4 my-2 col-md-4 col-sm-6 col-12">
                        <FilteredItems
                            key={items.id}
                            item={items}
                            img={img}
                        />
                    </div>
                ))}
                {/* </AnimatePresence> */}
            </div>
        </>
    )
}
