import { useEffect, useState } from "react"
import FilteredItems from "./FilteredItemsSingle";

const Filter = ({ activeFilter, setActiveFilter, setFiltered, all, filtered, links, setLinks }) => {
  // const links = [
  //   { 'link': "All", "category": "all" },
  //   { 'link': "Logo", "category": "logo" },
  //   { 'link': "Business Card", "category": "bcard" },
  //   { 'link': "Brochure", "category": "broc" },
  //   { 'link': "Branding/Guideline", "category": "brand" },
  //   { 'link': "PPT", "category": "ppt" },
  //   { 'link': "Flyer", "category": "fly" },
  //   { 'link': "Infographics", "category": "infograp" },
  //   { 'link': "Label", "category": "label" },
  //   { 'link': "Web", "category": "web" },
  //   { 'link': "Book Cover", "category": "book" }
  // ];


  const linkz = [];



  // console.log(filteredItm, filteredItmFilter);
  // console.log([...new Set(filteredItm)], [...new Set(filteredItmFilter.flat())]);



  // const links = tempData;





  const [active, setActive] = useState(null);
  useEffect(() => {

    if (activeFilter === 0) {
      setFiltered(all)
      return
    }
    const filtered = all.filter(items => {
      if (activeFilter === "all") {
        return all
      }
      else {
        return items.filter === activeFilter
      }
    });
    // console.log(filtered);
    // setFiltered(filtered);
  }, [])

  const handleFilter = ({ link }) => {
    setActive(link);
    setActiveFilter(link);



    const filtered = all.filter(items => {
      if (activeFilter === "all") {
        return all
      }
      else {
        console.log(items.filter);
        return JSON.parse(items.filter).indexOf(link) != -1
        JSON.parse(items.filter).map((item) => {
          // console.table(all);
        })
      }
    });
    setFiltered(filtered);
  }


  return (
    <>
      {all.filter.toString() === "null" ?
        ""
        :
        <div className="filters">
          <ul id="filters" className="filter-tabs my-4 filter-btns">
            {links.map((link) => {
              return (link.link === "null" ?
                ""
                :
                <li onClick={() => handleFilter(link)}>
                  <span class={`filter ${active === link.link && 'active'}`}>
                    {link.link}
                  </span>
                </li>)

            })}
          </ul>
        </div >
      }
    </>
  )
}

export default Filter