import { ReactNode, useState } from "react";
import GeneralTab from "./Tabs/GeneralTab";
import PasswordTab from "./Tabs/PasswordTab";
import HostInfoTab from "./Tabs/HostInfoTab";

export default function NewProfileContents() {

  const [ selectedTab, setSelectedTab ] = useState(0);

  const profileTabs = [
    <GeneralTab key={0} />,
    <PasswordTab key={1} />,
    <HostInfoTab key={2} />
  ] as ReactNode[];

  const profileTabTitles = [
    "General",
    "Password",
    "Hosting"
  ]

  const handleProfileTabSelect = (tab: number) => {
    setSelectedTab(tab);
  }

  return (
    <>
      <div className="w-full flex flex-col p-5 max-w-6xl flex-grow pb-20">
        <div className="flex flex-col lg:flex-row gap-7 w-full">

          <div className="flex flex-col gap-4 lg:gap-8 lg:border-r lg:border-r-gray-400 lg:pr-16 lg:mr-10">
            <h1 className="font-raleway font-bold text-3xl lg:text-4xl">My Account</h1>
            <div className="flex flex-rol lg:flex-col gap-1 lg:gap-3 lg:items-end">
              {profileTabTitles.map((tabTitle, index) => (
                <div 
                  className={`font-inter text-sm font-light w-22 text-center rounded-md py-1 lg:w-5/6 lg:text-right lg:pr-3 lg:py-2 lg:hover:outline lg:hover:cursor-pointer lg:hover:outline-1 ${selectedTab === index ? "bg-ll-black text-ll-grey" : "text-gray-400"}`}
                  onClick={() => handleProfileTabSelect(index)}
                  key={index}
                >
                  {tabTitle}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md">
            {profileTabs[selectedTab]}
          </div>

        </div>
      </div>
    </>
  )
}