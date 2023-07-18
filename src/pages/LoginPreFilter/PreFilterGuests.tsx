import { motion } from "framer-motion";
import logo from "../../assets/cool.png";


const PreFilterGuests = () => {
	return (
        <>
            <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 2 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
        <div className="flex flex-col items-center justify-center h-screen m-8">
        <img src={logo} alt="Cool-LOGO" className="flex w-[17vw] ml-36 mb-8 " />

        
            <div>
                <h1>Select Guests</h1>
            </div>
        </div>
    </motion.div>
        </>
    )
}

export default PreFilterGuests
