import React from "react";
import { GoLocation } from "react-icons/go";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Proposal = () => {
  return (
    <div className="w-full">
      <div className="banner h-[50vh]">
        <div className=" flex flex-col h-full w-[1200px] mx-auto">
          <div className="flex-1"></div>
          <div className="py-5 text-white">
            <h1 className="text-2xl mb-2">Project Name</h1>
            <p className="mb-2 flex items-center text-sm">
              <GoLocation size={18} className="text-blue-500" />
              <span className="ml-1">Harare</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto pt-5 pb-10">
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Details</Tab>
            <Tab>The Team</Tab>
            <Tab>Documents</Tab>
          </TabList>

          <TabPanel>
            <div className="py-10 px-5 grid grid-cols-3 gap-5">
              <div className="col-span-2">
                <h1 className="text-2xl">Short Description</h1>
                <p className="text-gray-700 text-lg mt-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit magni ducimus voluptates voluptatem vitae beatae ut
                  placeat sint sed cumque, esse ipsa possimus perferendis eius
                  nostrum! Odio a eaque quaerat corporis animi ducimus beatae,
                  ullam, impedit laudantium itaque voluptate atque.
                </p>
              </div>
              <div className="col-span-1">
                <h1 className="text-2xl">Overview</h1>
                <table className="w-full mt-2">
                  <tbody>
                    <tr className="border-t">
                      <td className="py-2">Target</td>
                      <td className="py-2 font-semibold">US$ 8,400.00</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">Investor's Percentage</td>
                      <td className="py-2 font-semibold">65%</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">Raised Investments</td>
                      <td className="py-2 font-semibold">US$3,800.00</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">Stage</td>
                      <td className="py-2 font-semibold">Initialization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Proposal;
