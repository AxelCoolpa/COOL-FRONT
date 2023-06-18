import React from "react";

// components
import CardStats from "../cards/CardStats";

const HeaderStats: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Clients"
                  statTitle="1584"
                  statArrow="up"
                  statPercent="42.6"
                  statPercentColor="text-emerald-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Operators"
                  statTitle="148"
                  statArrow="down"
                  statPercent="06.8"
                  statPercentColor="text-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Revenue"
                  statTitle="$24948"
                  statArrow="up"
                  statPercent="38.8"
                  statPercentColor="text-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Growth"
                  statTitle="+38%"
                  statArrow="up"
                  statPercent="08"
                  statPercentColor="text-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderStats;
