import { motion } from "framer-motion"
import { Link } from "react-router-dom"


function FilteredItems({ item }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            <Link class={`${item.filter}`} to="#" data-cat={`${item.filter}`} key={item.id}>
                <div className="inside">
                    <img src={item.image} alt="" />
                </div>
            </Link>
        </motion.div>
    )
}

export default FilteredItems