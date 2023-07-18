import { motion } from "framer-motion";
import logo from "../../assets/cool.png";
import CounterInput from "../../components/userFilter/CounterInput";
import Calendar from "../../components/userFilter/Calendar";
import { Link } from "react-router-dom";


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
        <img src={logo} alt="Cool-LOGO" className="flex w-[12vw] justify-center ml-20 mb-3 " />
        
            <div
             style={{
                fontWeight: "bold",
                textAlign: 'left',
                color: 'gray',
                display: 'flex',
                marginBottom: '1vw',
                marginTop: '1vw',
                justifyContent: 'flex-start'
              }}
            >
                <label>Select Guests</label>
            </div>

            <div
             style={{
                fontWeight: "bold",
                fontSize:'small',
                marginBottom: '1vw'
              }}
            >
                <CounterInput />
            </div>

            <div
             style={{
                fontWeight: "bold",
                textAlign: 'left',
                marginBottom: '1vw',
                color: 'gray',
                display: 'flex',
                justifyContent: 'left'
              }}
            >
                <label>Select Date Range:</label>
            </div>

            <div
             style={{
                fontWeight: "bold",
                fontSmooth: "black",
                marginBottom: '1vw',
              }}
            >
                <Calendar />
            </div>
            <div className="flex">
            <Link to={'../discover'}>
            <button
              className="bg-orange-700 w-[21vw] hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
              >
              Go discover!
            </button>
                </Link>            

          </div>
        </div>
    </motion.div>
        </>
    )
}

export default PreFilterGuests
