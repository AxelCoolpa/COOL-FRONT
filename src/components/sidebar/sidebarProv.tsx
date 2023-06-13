import { DEFAULT_EXTENSIONS } from "@babel/core";
import { useState } from "react"
import { Link } from "react-router-dom";


const SidebarProv: React.FC = () => {
    const [show, setShow] = useState('hidden');

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
            <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    <button
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    type="button"
                    onClick={() => setShow("bg-white m-2 py-3 px-6")}
                >
                    <i className="fas fa-bars"></i>
                </button>

                <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >Go Home</Link>

          {/* <issue_comment>username_1: @username_0 I'm not sure what you're asking. Can you */}
            </div>
            </nav>
        </>
    )
}

export default SidebarProv