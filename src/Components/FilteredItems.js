import { motion } from "framer-motion"


function FilteredItems({ item }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
        >
            <a class={`${item.filter}`} href="#" data-cat={`${item.filter}`} key={item.id}>
                <div class="inside">
                    <img src={item.image} alt="" />
                </div>
            </a>
        </motion.div>
    )
}

export default FilteredItems