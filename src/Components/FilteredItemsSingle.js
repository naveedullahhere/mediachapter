import { motion } from "framer-motion"
import { Link } from "react-router-dom"


function FilteredItems({ item, img }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >

            {item.filter.toString() === "null" ?
                <Link class={``} to="#" key={item.id}>
                    <div className="inside">
                        <img src={`${img}/${item.image}`} alt={`${item.title}`} />
                    </div>
                </Link>

                :
                <Link class={`${JSON.parse(item.filter).toString().includes(",") ? JSON.parse(item.filter).toString().replace(/,/g, " ") : JSON.parse(item.filter).toString()}`} to="#" key={item.id}>
                    <div className="inside">
                        <img src={`${img}/${item.image}`} alt={`${item.title}`} />
                    </div>
                </Link>
            }
        </motion.div>
    )
}

export default FilteredItems