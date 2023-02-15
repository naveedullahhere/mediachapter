
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Filter from '../Components/FilterSingle';
import FilteredItems from '../Components/FilteredItemsSingleHome';
import { AppContext } from '../context/AppContext';
import PortfolioItems from "./Portfolio.json";

export const MainPortfolio = ({ pageid }) => {

    const [filtered, setFiltered] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [fltr, setfltr] = useState([]);


    const [img, setImg] = useState(null);
    const { URL } = useContext(AppContext);


    const [links, setLinks] = useState([])
    useEffect(() => {

        // setLinks(tempData);

        fetch(`${URL}api/portfolio`)
            .then((response) => response.json())
            .then((actualData) => { setFiltered(actualData.data); setfltr(actualData.data); setImg(actualData.media_path) })
            .catch((err) => {
                setFiltered([]);
                toast.error("Something went wrong!");
            });
    }, []);

    let filteredItm = fltr.map((item) => {
        return item.category
    })


    let filteredItmFilter = fltr.map((item) => {

        return JSON.parse(item.filter);
    })


    var tempData = [];
    console.log([...new Set(filteredItmFilter.flat())].length);
    for (var index = 0; index < [...new Set(filteredItmFilter.flat())].length; index++) {
        var aa = { "link": `${[...new Set(filteredItmFilter.flat())][index]}` };
        tempData.push(aa);
    }

    // console.log(tempData);
    // for (var index = 0; index < [...new Set(filteredItm.flat())].length; index++) {
    //     var aa = { "link": `${[...new Set(filteredItm.flat())][index]}` };
    //     tempData.push(aa);
    // }




    return (
        <>


            <div className="row">
                {/* <AnimatePresence> */}
                {filtered.slice(0, 6).map(items => (
                    <div className="col-lg-4 my-2 col-md-4 col-sm-6 col-12 portfolioo">
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
