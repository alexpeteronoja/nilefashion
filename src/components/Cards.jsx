import { motion } from "motion/react";

function Cards(props) {
  return (
    <div>
      <motion.div
        className="w-[250px]   p-8 text-base shadow-md inika-font hover:shadow-2xl product-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img src={props.img} alt="" className="w-full max-h-[186px]" />
        <div className="flex justify-between mt-2.5 mb-5">
          <p className="font-bold text-xl">{props.itemName}</p>
          <p className="text-[#FF5A5F]">{props.price}</p>
        </div>

        <p>{props.itemDescription}</p>

        <button className="bg-[#FF5A5F] hover:bg-[#1f2937] rounded-sm w-full text-center text-white mt-4 py-1.5 cursor-pointer">
          Click to Buy
        </button>
      </motion.div>
    </div>
  );
}

export default Cards;
