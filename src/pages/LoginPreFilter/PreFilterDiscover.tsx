import { motion } from "framer-motion";
import logo from "../../assets/cool.png";
import CategoriesContainer from "../../components/userFilter/CategoriesContainer";
import { Link } from "react-router-dom";

const PreFilterDiscover = () => {
  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 2 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center justify-center h-screen m-8">
          <img
            src={logo}
            alt="Cool-LOGO"
            className="flex w-[17vw] ml-36 mb-8 "
          />
          <div>
            <h1
              style={{
                fontSize: "4em",
              }}
            >
              Discover
            </h1>
            <p style={{
                fontSize:"2em"
            }}>Find the perfect music for you.</p>
          </div>
          <div
            style={{
              width: "50%",
              marginTop: '2vw'
            }}
          >
            <CategoriesContainer />
          </div>
          <Link to={'../../'}>
            <button
              type="submit"
              className="bg-orange-700 w-[21vw] hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-2"
              >
              Go discover!
            </button>
                </Link> 
        </div>
      </motion.div>
    </>
  );
};

export default PreFilterDiscover;
