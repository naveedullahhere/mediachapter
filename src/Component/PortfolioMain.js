import React, { useState } from 'react';
import Portfolio from "./Portfolio.json";

export const PortfolioMain = () => {
    const [isActive, setIsActive] = useState(false);




    
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













    const [active, setActive] = useState(null);

    const handleFilter = ({ category, link }) => {
        setIsActive(isActive => !isActive);
        setActive(link);
        console.log(category);
    }
    return (
        <>
            <section className="gallery-section">
                <div className="auto-container">
                    <div className="mixitup-gallery">
                        <div className="filters">
                            <ul id="filters" className='filter-tabs filter-btns'>
                                {links.map((link) => {
                                    return <li><span class={`filter ${active == link.link && 'active'}`} data-filter={`${link.category === "all" ? `all` : `.${link.category}`}`} onClick={() => handleFilter(link)}>{link.link}</span></li>
                                })}
                            </ul>
                        </div>
                        <div className="filter-list row" id='gallery'>
                            <a class="gallery-item all Logo" href="#" data-cat="Logo">
                                <div class="inside">

                                    <img src="https://www.mediachapter.us/wp-content/uploads/2021/12/Logo-45.png" alt="" />
                                </div>
                            </a>
                            {Portfolio.map((item) => {
                                return <a class={`gallery-item mix ${item.filter}`} href="#" data-cat={`${item.filter}`} key={item.id}>
                                    <div class="inside">

                                        <img src={item.image} alt="" />
                                    </div>
                                </a>
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
