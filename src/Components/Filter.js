import { useEffect, useState } from "react"

const Filter = ({ activeFilter, setActiveFilter, setFiltered, all }) => {
  const links = [
    { 'link': "All", "category": "all" },
    { 'link': "Logo", "category": "logo" },
    { 'link': "Business Card", "category": "bcard" },
    { 'link': "Brochure", "category": "broc" },
    { 'link': "Branding/Guideline", "category": "brand" },
    { 'link': "PPT", "category": "ppt" },
    { 'link': "Flyer", "category": "fly" },
    { 'link': "Infographics", "category": "infograp" },
    { 'link': "Label", "category": "label" },
    { 'link': "Web", "category": "web" },
    { 'link': "Book Cover", "category": "book" }
  ];

  const [isActive, setIsActive] = useState(false);

  const [active, setActive] = useState(null);
  useEffect(() => {
    if (activeFilter === 0) {
      setFiltered(all)
      return
    }
    const filtered = all.filter(items => {
      if (activeFilter === "all") {
        console.log("is one");
        return all
      }
      else {
        console.log("is prod");
        return items.filter === activeFilter
      }
    });
    console.log(filtered);
    setFiltered(filtered);
  }, [activeFilter])

  const handleFilter = ({ category, link }) => {
    setIsActive(isActive => !isActive);
    setActive(link);
    setActiveFilter(category)
  }

  return (
    <>
      <div className="filters">
        <ul id="filters" class="filter-tabs my-4 filter-btns">
          {links.map((link) => {
            return <li onClick={() => handleFilter(link)}>
              <span class={`filter ${active == link.link && 'active'}`}>
                {link.link}
              </span>
            </li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Filter