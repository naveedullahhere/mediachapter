import { motion } from "framer-motion"


function FilteredItems({ item }) {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
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