
import Input from "./inputs/Input";
import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

const PruebaBookingBar = () => {
	return (
	
          <div className="absolute hidden xl:flex justify-between items-center w-11/12 p-5 bg-white shadow-black/30 shadow-lg -bottom-16 rounded-lg px-6">
            <div className="flex-none w-auto max-w-full px-3">
              <span className="font-bold">Location</span>
              <Input id="location" placeholder="Location" booking />
            </div>
            <div className="flex-none w-auto max-w-full px-3 my-auto">
              <span className="font-bold">Start date</span>
              <Input id="starDate" placeholder="---/-----/--" booking />
            </div>
            <div className="flex-none w-auto max-w-full px-3 my-auto">
              <span className="font-bold">Ending date</span>
              <Input id="endDate" placeholder="---/-----/--" booking />
            </div>
            <div className="flex-none w-auto max-w-full px-3 my-auto">
              <span className="font-bold">Peoples</span>
              <Input id="peoples" placeholder="1 adult" booking />
            </div>
			
			{/* <div className="w-96">
			<Tabs value="app">
				<TabsHeader>
					<Tab value="app">
						<div className="-mt-1 mr-2 inline-block h-5 w-5">app</div>
					</Tab>
					<Tab value="message">
						<div className="-mt-0.5 mr-2 inline-block h-5 w-5">message</div>
					</Tab>
					<Tab value="settings">
					<div className="-mt-1 mr-2 inline-block h-5 w-5">settings</div>
					</Tab>
				</TabsHeader>
			</Tabs>
			</div> */}

            <div className="bg-[#CE452A] w-[147px] gap-2 text-white rounded-lg text-center cursor-pointer">
              <button className="font-bold p-4" onClick={() => alert("Search")}>
                Search
              </button>
            </div>
          </div>
		  
  );
};

export default PruebaBookingBar;
